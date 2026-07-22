// src/sanity/structure.ts
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list().title("AfyaApp Admin").items(S.documentTypeListItems());
