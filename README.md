# instagram-followers-check
a simple script for checking who isn't following you back on instagram

# Step 1: Download your follower info from instagram

1. Go to https://www.instagram.com/ on your browser and navigate to Settings. Click the Meta Accounts Centre option.
   <img width="366" height="341" alt="Screenshot 2025-12-01 at 11 31 05 AM" src="https://github.com/user-attachments/assets/cbcdff2a-1223-4ac6-9895-f80aa339600d" />

2. In the Accounts Centre, select "Your Information and Permissions". Click "Export your information"
   <img width="1078" height="499" alt="Screenshot 2025-12-01 at 11 34 07 AM" src="https://github.com/user-attachments/assets/ac154041-a8fb-4e4d-ba6a-de9fe50cd0e6" />

3. Select all the preferred options to export your information. At "choose where to export", select "export to device".
   <img width="588" height="252" alt="Screenshot 2025-12-01 at 11 46 07 AM" src="https://github.com/user-attachments/assets/f084ac97-82e7-4765-bb48-041de3145b24" />

5. For the last step, click the "Customize information" option and deselect ALL the options except for "followers and following". ONLY check "followers and following". Click save.
   
   <img width="578" height="370" alt="Screenshot 2025-12-01 at 11 47 22 AM" src="https://github.com/user-attachments/assets/9af5200a-6e35-4063-85ba-8a77588d3806" />
   
   <img width="578" height="370" alt="Screenshot 2025-12-01 at 11 37 23 AM" src="https://github.com/user-attachments/assets/2333a591-6207-4037-abb8-f38c8fee70b3" />


6. Select "Date range" and select "All time".
   <div></div>
   <img width="578" height="370" alt="Screenshot 2025-12-01 at 11 47 22 AM" src="https://github.com/user-attachments/assets/311fc0f3-e271-4e18-a6ff-17c74d85e191" />

8. Select "format" and choose JSON. Then, start the export. 
   <img width="578" height="370" alt="Screenshot 2025-12-01 at 11 47 22 AM" src="https://github.com/user-attachments/assets/188c0ac4-9501-49ea-801c-0abc792517cd" />

9. Meta will update you on when the information will be ready to download, but it should take 3-5 minutes. You can go back to the same page to download your follower information - you should have at least these two files: followers_1.json and following.json.
   <img width="577" height="330" alt="Screenshot 2025-12-01 at 11 48 57 AM" src="https://github.com/user-attachments/assets/3e7ec064-5dbf-44ec-a179-4f2c916350ee" />

# Step 2: Use the script with the downloaded info
You can use and run the script however you like. However, if you dont know how to use Github/do not know anything about programming, you can follow these steps to run the code on a Mac. 

1. Go to this project page and click "Code" -> "Download .ZIP"
   <img width="851" height="513" alt="Screenshot 2025-12-01 at 11 59 49 AM" src="https://github.com/user-attachments/assets/06776c04-9e97-49b1-b86d-24138bfdb62b" />

2. Open the .zip and place the folder anywhere you want.

3. Replace followers_1.json and following.json in the folder with the same name files from the instagram export.

4. Open Terminal.

5. In Terminal, type `cd path-to-your-folder`. For example, if you put the folder in you downloads folder, type something like `cd /Users/myname/Downloads`.

   If you don't know the full path of your folder, you can drag the folder into the Terminal window to get the full path of the folder.
   <img width="771" height="257" alt="Screenshot 2025-12-01 at 12 04 48 PM" src="https://github.com/user-attachments/assets/4f27279e-15e4-41bf-9842-dacf729c3f82" />

6. Type `python3 compare_json.py`. You will get a result on the Terminal like this:
   <div></div>
   <img width="423" height="87" alt="Screenshot 2025-12-01 at 12 09 43 PM" src="https://github.com/user-attachments/assets/7ecedfcd-4d26-454a-898d-e04568cd0e64" />

8. The file "not_following_back.txt" will have a list of users not following you back.


# Tips
- Sometimes, instagram will include accounts that are deactivated or disabled.







