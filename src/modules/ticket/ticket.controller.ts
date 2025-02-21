import { Request, Response } from 'express';
import { validateTicket } from './ticket.validation';
import ValidateTicketServiceV1 from './services/validateTicket.service';

export const validate = async (req: Request, res: Response) => {
  const validateTicketServiceV1 = new ValidateTicketServiceV1();

  try {
    const data = validateTicket.parse(req.body);

    const response = await validateTicketServiceV1.execute(data);

    return res.status(200).json(response);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};
