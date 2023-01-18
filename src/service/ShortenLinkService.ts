import axios from "axios";

import { Link } from "../models/Link";
import { BaseService } from "./BaseService";

export class ShortenLinkService implements BaseService {
  async getLink(link: string): Promise<Link[]> {
    // let response = await axios.get(
    //   `https://api.shrtco.de/v2/shorten?url=&${link}`
    // );
    let response = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    let res: Link[] = response.data;
    return res;
  }
}
