import { Injectable, Inject } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderRequest } from './dto/create-request.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository ) {}
async createOrder(request: CreateOrderRequest) {
  return this.ordersRepository.create(request)
}
}
