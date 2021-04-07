# discord-nitro-code-scanner
Scans all servers under a user for Discord Nitro codes and automatically attempts to claim them. Includes error catching and console support.


## How to install:
1. Copy repository via zip download or by running `git clone https://github.com/IakovTaranenko/discord-nitro-code-scanner.git` via cmd
2. cd into the repository by running `cd discord-nitro-code-scanner` via cmd
3. run `node .` via cmd
4. Enter your token when prompted
5. Enjoy

## Additional notes
- Do NOT remove `discord.js` in `node_modules`, it's a special patch of v12.5.3 I made to bypass self-botting coutermeasures
- If your token stops working and gets the error `TOKEN_INVALID`, check if you overrid `discord.js` with a newer version, secondly, check if your Discord token is valid
- I suggest you add some kind of token storage variable since entering it every time you run it is annoying
- You can review the source code and modify it on your own, just dont change the dependencies in package.json as the entire script runs on specific dependency versions
- I've tested this script with multiple accounts all with max guilds, I've ran into minimal errors but nothing too major
