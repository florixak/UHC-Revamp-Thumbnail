import Kits from "./assets/kits.png";
import Perks from "./assets/perks.png";
import CustomRecipes from "./assets/custom-recipes.png";
import Recipe from "./assets/recipe.png";
import Profile from "./assets/profile.png";
import Teams from "./assets/teams.png";
import Quests from "./assets/quests-list.png";
import Quest from "./assets/quest.png";
import SBTablist from "./assets/sb-tablist.png";
import DeathChest from "./assets/deathchest.png";
import OreGen from "./assets/ore-gen.png";
import Drops from "./assets/drops.png";

export const about = {
  title: "UHC Revamp",
  description:
    "UHC minigame for Minecraft servers that combines a lot of UHC parts from popular servers. I wanted to combine all the popular parts of UHC from multiple servers, like custom recipes, custom ore generation or perks and you can customize what you want. A lot of time and effort went into this project, so I would really appreciate your feedback. I will try to improve this minigame as much as I can. Thank you and enjoy!",
};

export const features = [
  {
    title: "SOLO and TEAMS mode",
    description: "Choose between SOLO or TEAM mode.",
    images: [Teams],
  },
  {
    title: "Quests, Kits, Perks and Recipes",
    description: "Customize kits, perks and crafting recipes.",
    images: [Kits, Perks, CustomRecipes, Recipe],
  },
  {
    title: "Quests",
    description: "Complete quests to earn rewards.",
    images: [Quests, Quest],
  },
  {
    title: "UHC Level, Profile And Statistics",
    description: "Track player performance with detailed statistics.",
    images: [Profile],
  },
  {
    title: "Scoreboard And Tablist",
    description: "Customize scoreboard and tablist.",
    images: [SBTablist],
  },
  {
    title: "Custom Ore Generation And Drops",
    description: "Customize ore generation to suit your preferences.",
    images: [OreGen, Drops],
  },
  {
    title: "Death Chests",
    description: "Death chests to store player items after death.",
    images: [DeathChest],
  },
];

export const requirements = [
  { title: "Minecraft server version", description: "1.8, 1.18, 1.20" },
  { title: "Ram", description: "Atleast 4GB" },
  { title: "Java", description: "8+" },
];

export const configuration = [
  {
    title: "Config",
    description: "General configuration of plugin.",
  },
  {
    title: "Messages",
    description: "All messages messages are customizable.",
  },
  {
    title: "Scoreboard",
    description: "Configuration for scoreboard.",
  },
  {
    title: "Player_Data",
    description: "Storing player data such as wins, kills...",
  },
  {
    title: "Teams",
    description: "Configuration for teams.",
  },
  {
    title: "Kits",
    description: "Configuration for player kits.",
  },
  {
    title: "Perks",
    description: "Configuration for player perks.",
  },
  {
    title: "Quests",
    description: "Configuration for quests.",
  },
  {
    title: "Custom_Drops",
    description: "Settings for custom drops from blocks and mobs.",
  },
  {
    title: "Custom_Recipes",
    description: "Custom recipes that can be added to the game.",
  },
  {
    title: "Ore_Generation",
    description: "Configuration for ore generation.",
  },
];

export const supports = [
  {
    title: "MySQL",
    description: "Save player data to database.",
  },
  {
    title: "BungeeCord",
    description: "Connect UHC with your BungeeCord server.",
  },
  {
    title: "PlaceholderAPI",
    description: "For placeholder support.",
  },
  {
    title: "ProtocolLib",
    description: "For enhanced compatibility.",
  },
  {
    title: "LuckPerms",
    description: "Utilize advanced permission management.",
  },
  {
    title: "Vault",
    description: "Reward players with in-game currency.",
  },
];

export const commands = [
  {
    command: "/uhc",
    aliases: ["/uhcr ", "/uhcrevamp"],
    description: "UHC help",
  },
  { command: "/forcestart", aliases: ["/start "], description: "Start game" },
  { command: "/forceskip", aliases: ["/skip "], description: "Skip phase" },
  {
    command: "/workbench",
    aliases: ["/wb ", "/craftingtable"],
    description: "Remote workbench",
  },
  { command: "/anvil", description: "Remote anvil" },
  { command: "/team", aliases: ["/teams "], description: "Teams GUI" },
  { command: "/kits", aliases: ["/kit "], description: "Kits GUI" },
  { command: "/perks", aliases: ["/perk "], description: "Perks GUI" },
  { command: "/quests", aliases: ["/quest "], description: "Quests GUI" },
  {
    command: "/recipes ",
    aliases: ["/crafts ", "/recipe"],
    description: "Recipes GUI",
  },
  { command: "/statistics", aliases: ["/stats "], description: "Player stats" },
  { command: "/revive", description: "Revive player" },
];

export const permissions = [
  { title: "uhcrevamp.setup", description: "Admin setup command" },
  { title: "uhcrevamp.forcestart", description: "Start game command" },
  { title: "uhcrevamp.forceskip", description: "Skip phase command" },
  { title: "uhcrevamp.anvil", description: "Remote anvil command" },
  {
    title: "uhcrevamp.workbench",
    description: "Remote workbench command",
  },
  { title: "uhcrevamp.revive", description: "Revive player command" },
  { title: "uhcrevamp.vip", description: "VIP access" },
  { title: "uhcrevamp.reserved-slot", description: "Reserved slot" },
];

export const placeholders = [
  {
    title: "%uhcrevamp_player%",
    description: "Returns the player's name.",
  },
  {
    title: "%uhcrevamp_team%",
    description: "Returns the player's team name.",
  },
  {
    title: "%uhcrevamp_kills%",
    description: "Returns the number of kills the player has.",
  },
  {
    title: "%uhcrevamp_killstreak%",
    description: "Returns the player's killstreak.",
  },
  {
    title: "%uhcrevamp_assists%",
    description: "Returns the number of assists the player has.",
  },
  {
    title: "%uhcrevamp_level%",
    description: "Returns the player's UHC level.",
  },
  {
    title: "%uhcrevamp_uhc-exp%",
    description: "Returns the player's UHC exp.",
  },
  {
    title: "%uhcrevamp_required-uhc-exp%",
    description: "Returns the required UHC exp for the next level.",
  },
  {
    title: "%uhcrevamp_ping%",
    description: "Returns the player's ping.",
  },
  {
    title: "%uhcrevamp_money%",
    description: "Returns the player's money.",
  },
  {
    title: "%uhcrevamp_total-kills%",
    description: "Returns the player's total kills.",
  },
  {
    title: "%uhcrevamp_total-deaths%",
    description: "Returns the player's total deaths.",
  },
  {
    title: "%uhcrevamp_total-wins%",
    description: "Returns the player's total wins.",
  },
  {
    title: "%uhcrevamp_total-losses%",
    description: "Returns the player's total losses.",
  },
  {
    title: "%uhcrevamp_games-played%",
    description: "Returns the number of games the player has played.",
  },
  {
    title: "%uhcrevamp_%hp%%",
    description: "Returns the player's current health.",
  },
  {
    title: "%uhcrevamp_%health%%",
    description: "Returns the player's current health.",
  },
  {
    title: "%uhcrevamp_kit%",
    description:
      "Returns the player's selected kit or a message if no kit is selected.",
  },
  {
    title: "%uhcrevamp_perk%",
    description:
      "Returns the player's selected perk or a message if no perk is selected.",
  },
  {
    title: "%uhcrevamp_luckperms-prefix%",
    description: "Returns the player's LuckPerms prefix.",
  },
  {
    title: "%uhcrevamp_luckperms-suffix%",
    description: "Returns the player's LuckPerms suffix.",
  },
  {
    title: "%uhcrevamp_%team%%",
    description:
      "Returns the player's team name or a message if the player has no team.",
  },
  {
    title: "%uhcrevamp_author%",
    description: "Returns the plugin author's name.",
  },
  {
    title: "%uhcrevamp_version%",
    description: "Returns the plugin version.",
  },
  {
    title: "%uhcrevamp_prefix%",
    description: "Returns the plugin's prefix message.",
  },
  {
    title: "%uhcrevamp_currency%",
    description: "Returns the currency name used in the plugin.",
  },
  {
    title: "%uhcrevamp_world%",
    description: "Returns the name of the UHC world.",
  },
  {
    title: "%uhcrevamp_border%",
    description: "Returns the current size of the world border.",
  },
  {
    title: "%uhcrevamp_countdown%",
    description: "Returns the formatted countdown time.",
  },
  {
    title: "%uhcrevamp_online%",
    description: "Returns the number of online players.",
  },
  {
    title: "%uhcrevamp_max-online%",
    description: "Returns the maximum number of players allowed online.",
  },
  {
    title: "%uhcrevamp_players-to-start%",
    description: "Returns the number of players required to start the game.",
  },
  {
    title: "%uhcrevamp_alive%",
    description: "Returns the number of alive players.",
  },
  {
    title: "%uhcrevamp_dead%",
    description: "Returns the number of dead players.",
  },
  {
    title: "%uhcrevamp_spectators%",
    description: "Returns the number of spectator players.",
  },
  {
    title: "%uhcrevamp_winner%",
    description: "Returns the name of the UHC winner.",
  },
  {
    title: "%uhcrevamp_mode%",
    description: "Returns the current game mode (teams or solo).",
  },
];
