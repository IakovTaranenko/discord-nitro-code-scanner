# discord-nitro-code-scanner
Scans all servers under a user for Discord Nitro codes and automatically attempts to claim them. Includes error catching and console support.


## How to install:
1. Copy repository via zip download or by running `git clone https://github.com/IakovTaranenko/discord-nitro-code-scanner.git` via cmd
2. cd into the repository by running `cd discord-nitro-code-scanner` via cmd
3. run `yarn install` via cmd
4. run `node .` via cmd
5. Enter your token when prompted
6. Enjoy

## Additional notes
- I suggest you add some kind of token storage variable since entering it every time you run it is annoying
- You can review the source code and modify it on your own, just dont change the dependencies in package.json as the entire script runs on specific dependency versions
- I've tested this script with multiple accounts all with max guilds, I've ran into minimal errors but nothing too major
