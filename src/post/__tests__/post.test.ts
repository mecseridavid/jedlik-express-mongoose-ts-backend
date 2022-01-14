/* eslint-disable @typescript-eslint/no-explicit-any */
import "dotenv/config";
import App from "../../app";
import AuthenticationController from "../../authentication/authentication.controller";
import PostController from "../../post/post.controller";
import validateEnv from "../../utils/validateEnv";
import * as request from "supertest";

validateEnv();

let server: Express.Application;
// eslint-disable-next-line @typescript-eslint/ban-types
let cookie: string | any;

beforeAll(async () => {
    server = new App([new AuthenticationController(), new PostController()]).getServer();
    const response = await request(server).post("/auth/login").send({
        email: "student001@jedlik.eu",
        password: "student001",
    });
    cookie = response.headers["set-cookie"];
});

describe("test API endpoints", () => {
    it("GET /posts", async () => {
        const response = await request(server).get("/posts").set("Cookie", cookie);
        const count: number = response.body.count;
        expect(response.body.count).toBe(count);
    });
});
