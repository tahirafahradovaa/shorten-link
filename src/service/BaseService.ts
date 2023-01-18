export interface BaseService {
  getLink(link: string): Promise<any[]>;
}
