const Commands = [
	{
		header: 'Help',
		subtitle: 'Help [Command]',
		description: 'System displays the manual page for the specified command',
	},
	{
		header: 'Scale',
		subtitle: 'Scale',
		description: 'Toggles mileage markers on/off (whichever it is not currently) at the edge of the radar display.',
	},

	{
		header: 'Take Off',
		subtitle: '[Flight ID] T',
		description: 'Plane takes off and heads to target altitude and target destination.',

	},
	{
		header: 'Land',
		subtitle: '[Flight ID] L [runway]',
		description: 'Plane attempts to land at target runway.',

	},

	{
		header: 'Clearance (Option One)',
		subtitle: '[Flight ID] C [01<XX<56]',
		description: 'Plane climbs/descends to XX,000 ft, so long as given number is less than the specific aircraft model’s operational ceilingPlane climbs/descends to XX,000 ft, so long as given number is less than the specific aircraft model’s operational ceiling.',
	},

	{
		header: 'Clearance (Option Two)',
		subtitle: '[Flight ID] C [Nav Point]',
		description: 'Plane cleared to specified Nav Point',
	},
		
		
	{
		header: 'Clearance (Option Three)',
		subtitle: '[Flight ID] C [Nav Point] [L/R]:',
		description: 'Plane cleared to specified Nav Point, and turns the specified direction to reach the destination',
	},

	{
		header: 'Clearance (Option Four)',
		subtitle: '[Flight ID] C [Degree]',
		description: 'Plane cleared to heading in that direction. (0/360 = North, 180 = south)',

	},
		
	{
		header: 'Wait',
		subtitle: '[Flight ID] W',
		description: 'Departing plane holds at the end of the runway to await further instructions.',
	},

	{
		header: 'Hold,',
		subtitle: '[Flight ID] H [nav fix]',
		description: 'Plane enters holding pattern around given nav fix (assuming it is a valid location).',

	},

	{
		header: 'Speed',
		subtitle: '[Flight ID] S [15 < XX < 99]',
		description: 'Plane adjusts speed until it reaches XX x 10 knots, so long as XX is not less than the aircraft model’s minimum airspeed or exceeds the aircraft model’s maximum airspeed.',
	},

	{
		header: 'Abort',
		subtitle: '[Flight ID] A',
		description: 'Plane aborts current landing/take off command, maintains current altitude and heading.'
	}
]

export default Commands;