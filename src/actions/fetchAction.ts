"use server";

import { flattenValidationErrors } from "next-safe-action";
import { actionClient } from "@/lib/safeAction/safe-action";
import { z } from "zod";

export const Schema = z.object({
  name: z.string().min(3),
});

export const fetchAction = actionClient
  .schema(Schema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { name } }) => {
    return true;
  });
