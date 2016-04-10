System.register(['angular2/core', 'angular2/common', '../../services/order/order.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, order_service_1;
    var OrderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (order_service_1_1) {
                order_service_1 = order_service_1_1;
            }],
        execute: function() {
            OrderComponent = (function () {
                function OrderComponent(_orderService) {
                    this._orderService = _orderService;
                    this.orders = [];
                }
                OrderComponent.prototype.ngOnInit = function () {
                    this.getOrders();
                };
                OrderComponent.prototype.getOrders = function () {
                    var _this = this;
                    this._orderService.getOrders()
                        .subscribe(function (orders) {
                        return orders.map(function (order) {
                            return {
                                orderId: order.orderId,
                                orderDate: new Date(order.orderDate.toString()),
                                total: order.total
                            };
                        }).forEach(function (order) {
                            _this.orders.push(order);
                        });
                    });
                };
                OrderComponent = __decorate([
                    core_1.Component({
                        selector: 'orders',
                        template: "\n                          <div class=\"album-section\">\n                            <div class=\"container \">\n                                <div class=\"card\">\n                                    <div class=\"card-block\">\n                                        <h2 class=\"title\">Orders</h2>\n                                        <table class=\"table table-bordered\">\n                                            <tr>\n                                                <td>Id</td>\n                                                <td>Date</td>\n                                                <td>Cost</td>\n                                            </tr>\n                                            <tbody>\n                                                <tr *ngFor=\"#order of orders\">\n                                                    <td>{{order.orderId}}</td>\n                                                    <td>{{order.orderDate | date}}</td>\n                                                    <td><span>$</span>{{order.total}}</td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n\n                                    </div>\n                                </div>\n                            </div>\n                          </div>\n                        ",
                        styles: ["\n                          .card {\n                            background-color:#fff;\n                          }\n                        "],
                        directives: [common_1.CORE_DIRECTIVES],
                        pipes: [common_1.DatePipe]
                    }), 
                    __metadata('design:paramtypes', [order_service_1.OrderService])
                ], OrderComponent);
                return OrderComponent;
            })();
            exports_1("OrderComponent", OrderComponent);
        }
    }
});
