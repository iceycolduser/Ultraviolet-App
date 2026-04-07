import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { cpSync, mkdirSync } from "node:fs";

mkdirSync("public/uv", { recursive: true });
mkdirSync("public/baremux", { recursive: true });
mkdirSync("public/epoxy", { recursive: true });

// Copy UV bundle files — don't overwrite our custom uv.config.js
cpSync(uvPath, "public/uv", { recursive: true, force: false, errorOnExist: false });

// Copy baremux and epoxy transport files
cpSync(baremuxPath, "public/baremux", { recursive: true });
cpSync(epoxyPath, "public/epoxy", { recursive: true });

console.log("Assets copied to public/");
