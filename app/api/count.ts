import * as fs from "node:fs";
import { createServerFn } from "@tanstack/start";

const filePath = "/tmp/count.txt";

const readCount = async () => {
  return Number.parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0"),
  );
};

export const getCount = createServerFn("GET", () => {
  return readCount();
});

export const updateCount = createServerFn("POST", async (addBy: number) => {
  const count = await readCount();
  await fs.promises.writeFile(filePath, `${count + addBy}`);
});
