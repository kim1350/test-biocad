export type Meta = {
  current_page: number;
  last_page: number;
  page_size: number;
  total: number;
};

export type ApiResponse<T> = {
  data: T;
};

export type ApiListResponse<T> = {
  data: T[];
  meta: Meta;
};
