import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IServerResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  status?: number;
}
