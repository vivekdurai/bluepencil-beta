<script>
	import { DateTime } from 'luxon';
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	import { Settings } from "luxon";
	Settings.defaultZoneName = timezone;
	const units = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

	const timeAgo = (date) => {

		let dateTime = DateTime.fromISO(date, {zone: 'utc'});
		// console.log(dateTime)
		dateTime = dateTime.setZone(timezone)
		const diff = dateTime.diffNow().shiftTo(...units);
		const unit = units.find((unit) => diff.get(unit) !== 0) || 'second';

		const relativeFormatter = new Intl.RelativeTimeFormat('en', {
			numeric: 'auto'
		});
		return relativeFormatter.format(Math.trunc(diff.as(unit)), unit);
	};

	export let src;
</script>

<span>{timeAgo(src)}</span>
