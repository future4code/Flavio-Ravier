import { Band } from "../entities/band";

export interface BandGateway {
  registerBand(band: Band): Promise<void>;
  getBandById(id: string): Promise<Band | undefined>;
  getBandByName(name: string): Promise<Band | undefined>;
}
