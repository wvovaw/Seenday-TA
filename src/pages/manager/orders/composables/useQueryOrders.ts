import { internalAPIFetch } from "~/shared/api/internal/instance";

import type { Orders, OrdersApiResponse } from "../types/order";

export function useQueryOrders() {
  const data = ref<Orders>([]);

  const get = async (filters?: Record<string, any>) => {
    console.log("Request with filters: ", filters);
    const query = await internalAPIFetch<OrdersApiResponse>("orders.getTest", {});
    data.value = query.response.data.orders;
  };

  watchEffect(() => {
    console.log(data.value);
  });

  return {
    data,
    get
  };
}
