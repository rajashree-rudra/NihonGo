"use server";

import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { supabaseService } from "@/lib/supabase/server";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Every admin action checks again that the caller is an admin, and never acts on the admin's own account. */
async function targetAccount(id: unknown): Promise<string> {
  const admin = await requireAdmin();
  if (typeof id !== "string" || !UUID.test(id)) throw new Error("Unknown account");
  if (id === admin.id) throw new Error("You can't change your own account here");
  return id;
}

/** Deletes the account, its details and its study history. */
export async function deleteAccount(id: string): Promise<void> {
  const uid = await targetAccount(id);
  const { error } = await supabaseService().auth.admin.deleteUser(uid);
  if (error && error.status !== 404) throw error;
  await db().profile.deleteMany({ where: { id: uid } }); // activity and learned items go with it (cascade)
  revalidatePath("/admin");
}

export type ResetState = { password?: string; error?: string } | undefined;

/** Gives the account a new random password, shown once to the admin to pass on. */
export async function resetPassword(id: string, _prev: ResetState): Promise<ResetState> {
  const uid = await targetAccount(id);
  const password = randomBytes(9).toString("base64url"); // 12 characters
  const { error } = await supabaseService().auth.admin.updateUserById(uid, { password });
  if (error) return { error: "Couldn't reset the password. Please try again." };
  return { password };
}
