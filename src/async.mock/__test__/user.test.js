import axios from "axios";
import { register } from "../user";
import {verifyUsername, verifyPassword} from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const response = {data: {username: "thj", password: "test"}}
    axios.post.mockResolvedValue(response);
    await expect(register("thj","test")).resolves.toEqual({username: "thj", password: "test"});

  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyPassword.mockReturnValueOnce(false);
    verifyUsername.mockReturnValueOnce(false);
    await expect(register("thj", "test")).rejects.toThrowError();
  });
});
