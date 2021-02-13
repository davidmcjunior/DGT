import { ViewType } from "../../constants";

export interface NavigationLink {
    name: string;
    icon: string;
    url: string;
    page?: ViewType;
}
