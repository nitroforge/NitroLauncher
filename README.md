<p align="center">
<img src="https://raw.githubusercontent.com/nitroforge/NitroLauncher/main/logo.png" alt="Mario Kart Nitro" width="150" />
</p>

<p align="center">
<picture>
<source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.png">
<source media="(prefers-color-scheme: light)" srcset="assets/banner-light.png">
<img src="assets/banner-dark.png" alt="One click. Full speed." width="100%" />
</picture>
</p>

<p align="center">
<a href="../../releases/latest"><img src="https://img.shields.io/github/v/release/nitroforge/NitroLauncher?style=flat-square&color=f0561e&labelColor=161b22&label=Latest" alt="Latest" /></a>
<a href="../../releases"><img src="https://img.shields.io/github/downloads/nitroforge/NitroLauncher/total?style=flat-square&color=30363d&labelColor=161b22&label=Downloads" alt="Downloads" /></a>
<a href="LICENSE.txt"><img src="https://img.shields.io/badge/License-GPL--3.0-30363d?style=flat-square&labelColor=161b22" alt="License" /></a>
<a href="https://discord.gg/AhkHNPG65G"><img src="https://img.shields.io/badge/Discord-Join-5865F2?style=flat-square&labelColor=161b22&logo=discord&logoColor=white" alt="Discord" /></a>
</p>

<p align="center">
<a href="../../releases/latest"><img src="https://img.shields.io/badge/DOWNLOAD-LATEST%20RELEASE-f0561e?style=for-the-badge&labelColor=161b22" alt="Download the latest release" /></a>
<a href="https://discord.gg/AhkHNPG65G"><img src="https://img.shields.io/badge/HELP-DISCORD-5865F2?style=for-the-badge&labelColor=161b22&logo=discord&logoColor=white" alt="Get help on Discord" /></a>
<a href="https://github.com/nitroforge/Nitropack"><img src="https://img.shields.io/badge/MOD-NITROPACK-30363d?style=for-the-badge&labelColor=161b22" alt="Nitropack" /></a>
</p>

<p align="center"><img src="assets/divider.svg" width="100%" height="6" alt="" /></p>

## What it does

<table>
<tr><td width="52" align="center"><img src="assets/i-mouse-pointer-click.svg" width="28" alt="" /></td><td><b>Play in one click</b><br />Sets the mod up in Dolphin and starts the game.</td></tr>
<tr><td width="52" align="center"><img src="assets/i-refresh-cw.svg" width="28" alt="" /></td><td><b>Always up to date</b><br />Downloads only changed files and checks every one. Failed downloads retry on their own.</td></tr>
<tr><td width="52" align="center"><img src="assets/i-download.svg" width="28" alt="" /></td><td><b>Updates itself</b><br />New launcher versions come from the releases and are verified before they replace the old exe.</td></tr>
<tr><td width="52" align="center"><img src="assets/i-user-round.svg" width="28" alt="" /></td><td><b>Mii editor</b><br />Pick every part visually, with a live preview.</td></tr>
<tr><td width="52" align="center"><img src="assets/i-gauge.svg" width="28" alt="" /></td><td><b>Performance mode</b><br />Starts Dolphin with settings tuned for speed. Your own Dolphin settings are not changed.</td></tr>
<tr><td width="52" align="center"><img src="assets/i-music.svg" width="28" alt="" /></td><td><b>My Stuff</b><br />Drop your own files, like music, into a folder and the launcher adds them to the mod.</td></tr>
<tr><td width="52" align="center"><img src="assets/i-languages.svg" width="28" alt="" /></td><td><b>16 languages</b><br />Switch any time in Settings.</td></tr>
<tr><td width="52" align="center"><img src="assets/i-shield-check.svg" width="28" alt="" /></td><td><b>Your saves stay yours</b><br />The launcher never installs, replaces or deletes save data.</td></tr>
</table>

## Get started

1. **Download** `MarioKartNitro.exe` from the [latest release](../../releases/latest).
2. **Set it up.** Point it to `Dolphin.exe` and your own game file.
3. **Sync the mod.** The first launch downloads everything for you.
4. **Press Play.** Updates are checked every time you open the launcher.

> **You need** Windows 10 or 11, [Dolphin](https://dolphin-emu.org/) with Riivolution support, and your own Mario Kart Wii disc image (ISO or WBFS). This project does not provide one.

## FAQ

<details>
<summary><b>Where does the launcher put the mod?</b></summary>
<br />
In Dolphin's own user folder, under <code>Load/Riivolution</code>. Nothing is installed anywhere else.
</details>

<details>
<summary><b>Will it touch my save files?</b></summary>
<br />
No. Save data under <code>riivolution/save</code> is never downloaded, replaced or deleted by the launcher. The game creates it on your PC the first time you play.
</details>

<details>
<summary><b>I get error 22005 when going online.</b></summary>
<br />
That error means the save profile belongs to a different console. Close Dolphin, then rename
<code>Dolphin\User\Load\Riivolution\riivolution\save\NitroWFC\RMCP\rksys.dat</code> to <code>rksys.dat.bak</code> (use <code>RMCE</code> for the US version) and start the game again.
A new save is created from your normal Mario Kart Wii save. Only do this if you have the error, because a working save holds your progress.
</details>

<details>
<summary><b>The download failed or says GitHub is not serving a file.</b></summary>
<br />
The launcher retries by itself. If it still fails, wait a few minutes and press Play again. Everything that already downloaded is kept.
</details>

<details>
<summary><b>Do you provide the game?</b></summary>
<br />
No. You need your own copy of Mario Kart Wii.
</details>

## Built with

<p align="center">
<img src="assets/stack.svg" alt="Python, JavaScript, HTML5, CSS3, VS Code, Git, GitHub, Windows" width="100%" />
</p>

## License and community

GPL v3, see [LICENSE.txt](LICENSE.txt). Third-party parts and their licenses are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
Questions, bugs, or just want to chat? Join the [Discord](https://discord.gg/AhkHNPG65G).

<br />

<div align="center">
<sub>A project by <b>NitroForge</b>. Mario Kart Nitro is a fan project and is not affiliated with or endorsed by Nintendo. Mario Kart and Wii are trademarks of Nintendo.</sub>
</div>
