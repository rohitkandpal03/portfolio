declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare interface ImportMeta {
  readonly env: {
    readonly BASE_URL: string;
    // add more env variables if needed
  };
}
