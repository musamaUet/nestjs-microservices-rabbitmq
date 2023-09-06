import { Logger, Injectable } from "@nestjs/common";
import { AbstractRespository } from "@app/common/database/abstract.repository";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Model, Connection } from "mongoose";
import { Order } from "./schemas/order.schema";

@Injectable()
export class OrdersRepository extends AbstractRespository<Order> {
    protected readonly logger = new Logger(OrdersRepository.name);

    constructor(@InjectModel(Order.name) orderModel: Model<Order>, @InjectConnection() connection: Connection) {
        super(orderModel, connection);
    }
}