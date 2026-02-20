// Browser-friendly analyzer ported from compare_json.py
// Exports `analyze(followingData, followersData)` which returns
// { followingCount, followersCount, notFollowingBack: Array, text }

export function analyze(followingData, followersData) {
  const followingNames = new Set()

  console.log("////////8")
  console.log(followingData.relationships_following)
  console.log("////////10")


  // following.json typically has a `relationships_following` array with objects
  // that contain a `title` field (based on the original Python script)
  if (followingData) {
    const rel = followingData.relationships_following 
    if (Array.isArray(rel)) {
      for (const u of rel) {
        if (!u) continue
        if (typeof u === 'string') followingNames.add(u)
        else if (u.title) followingNames.add(u.title)
        else if (u.username) followingNames.add(u.username)
        else if (u.name) followingNames.add(u.name)
      }
    } else if (Array.isArray(followingData)) {
      for (const u of followingData) {
        if (!u) continue
        if (u.title) followingNames.add(u.title)
        else if (u.username) followingNames.add(u.username)
        else if (typeof u === 'string') followingNames.add(u)
      }
    }
  }

  const followersNames = new Set()
  // followers_1.json in the Python script is an array where each item has
  // `string_list_data` which itself is an array of objects with `value`
  if (followersData) {
    if (Array.isArray(followersData)) {
      for (const user of followersData) {
        if (!user) continue
        const list = user.string_list_data ?? user['string_list_data'] ?? []
        if (Array.isArray(list)) {
          for (const it of list) {
            if (!it) continue
            if (it.value) followersNames.add(it.value)
            else if (it.title) followersNames.add(it.title)
            else if (typeof it === 'string') followersNames.add(it)
          }
        }
      }
    } else if (typeof followersData === 'object') {
      // Some exports may wrap data; try to find arrays inside
      for (const key of Object.keys(followersData)) {
        const val = followersData[key]
        if (Array.isArray(val)) {
          // recursively handle array case by calling analyze-like logic
          for (const user of val) {
            const list = user?.string_list_data ?? user?.['string_list_data'] ?? []
            if (Array.isArray(list)) {
              for (const it of list) {
                if (!it) continue
                if (it.value) followersNames.add(it.value)
                else if (it.title) followersNames.add(it.title)
                else if (typeof it === 'string') followersNames.add(it)
              }
            }
          }
        }
      }
    }
  }

  const notFollowingBack = [...followingNames].filter(x => !followersNames.has(x))
  notFollowingBack.sort((a,b) => a.localeCompare(b, undefined, {sensitivity:'base'}))

  const text = notFollowingBack.join('\n') + (notFollowingBack.length ? '\n' : '')
  console.log("test 73")

  return {
    followingCount: followingNames.size,
    followersCount: followersNames.size,
    notFollowingBack,
    text
  }
}

export default analyze

