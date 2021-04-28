import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;

      const createUser = this.createUserUseCase.execute({ name, email });
      if (!createUser) {
        return response.status(400).json({ error: "This e-mail already exist" })
      }

      return response.status(201).json(createUser);
    } catch (err) {
      return response.status(400).json({
        error: err.message,
      })
    }
  }
}

export { CreateUserController };
