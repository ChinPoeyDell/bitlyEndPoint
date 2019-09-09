import {TestController} from "./controller/TestController";
import {BackendController} from "./controller/BackendController";

export const Routes = [{
    method: "get",
    route: "/hello",
    controller: TestController,
    action: "hello"
},
{
    method: "get",
    route: "/lists",
    controller: BackendController,
    action: "lists"
},
{
    method: "post",
    route: "/addLists",
    controller: BackendController,
    action: "newUrl"
}];