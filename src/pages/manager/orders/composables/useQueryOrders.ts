import { internalAPIFetch } from "~/shared/api/internal/instance";

import type { Orders, OrdersApiResponse } from "../types/order";

export function useQueryOrders() {
  const data = ref<Orders>([]);

  const get = async (qs?: string) => {
    const queryString = qs ? "?" + qs : "";
    const query = await internalAPIFetch<OrdersApiResponse>(`orders.getTest${queryString}`);
    data.value = query.response.data.orders ?? [];
  };

  return {
    data,
    get
  };
}
