import fastify from "fastify";
import butterfliesApi from "./api";
import db from "../util/db/db";
import { describe, it, expect, vi } from "vitest";
import type { dbSchema } from "../../database/schema";
import { Low } from "lowdb";
import { JSONFilePreset } from "lowdb/node";

describe("butterflies API", () => {
  it("should return a list of butterflies", async () => {
    const app = fastify();
    const defaultData: dbSchema = {
      butterflies: [
        {
          id: "1",
          commonName: "Monarch",
          species: "Danaus plexippus",
          article:
            "A large migratory butterfly known for its orange and black wings.",
        },
      ],
      users: [],
    };
    console.log(__filename);
    await vi.waitFor(async () => {
      const db1 = await JSONFilePreset<dbSchema>("./mock.db.json", defaultData);
      expect(db1.data).not.toEqual(defaultData);
    }, 5000);
    await app.register(db, { filePath: "./mock.db.json" });
    app.register(butterfliesApi);

    const response = await app.inject({
      method: "GET",
      url: "/api/butterflies",
    });

    console.log(response.body);

    expect(response.statusCode).toBe(200);
    const responseBody = JSON.parse(response.body);
    expect(responseBody).toHaveProperty("butterflies");
    expect(responseBody.butterflies.length).toBe(2);
  });
});
