import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

export function format(date: any) {
	dayjs.extend(localizedFormat);
	return dayjs(date).format("lll");
}
