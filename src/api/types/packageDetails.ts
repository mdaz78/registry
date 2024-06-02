export interface PackageDetails {
  name: string;
  description: string;
  readme: string;
  version: string;
  author?: {
    email: string;
    name: string;
  };
  maintainers: {
    email: string;
    name: string;
  }[];
  license: string;
}
