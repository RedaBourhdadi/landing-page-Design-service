// Project data types
export type ProjectDetail = {
	location: string;
	yearCompleted: string;
	sqft: string;
	services: string[];
};

export type Project = {
	title: string;
	type: string;
	image: string;
	slug: string;
	description?: string;
	details?: ProjectDetail;
	gallery?: string[];
};

// Project types for filtering
export const projectTypes = [
	'All',
	'ADU Design',
	'Load-bearing Wall',
	'Kitchen Remodel',
	'Foundation Inspection',
	'Deck Design',
	'Bath Remodel',
	'House Extension',
	'New Construction',
];

// Project data
export const projects: Project[] = [
	{
		title: 'ADU Design in San Jose',
		type: 'ADU Design',
		image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
		slug: 'adu-design-in-san-jose',
		description:
			'A 600 sq. ft. Accessory Dwelling Unit designed for a family in San Jose. This modern ADU features one bedroom, a full kitchen, bathroom, and an open-concept living area.',
		details: {
			location: 'San Jose, CA',
			yearCompleted: '2022',
			sqft: '600',
			services: [
				'Architectural Design',
				'Structural Engineering',
				'Permit Application',
			],
		},
		gallery: [
			'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
			'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
			'https://images.unsplash.com/photo-1600607688969-a5bfcd646154',
		],
	},
	{
		title: 'Load-bearing Wall Removal in Palo Alto',
		type: 'Load-bearing Wall',
		image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
		slug: 'load-bearing-wall-removal-in-palo-alto',
		description:
			'Structural engineering and design for removing a load-bearing wall to create an open floor plan in a Palo Alto residence.',
		details: {
			location: 'Palo Alto, CA',
			yearCompleted: '2023',
			sqft: '1,200',
			services: [
				'Structural Engineering',
				'Construction Documents',
				'Contractor Coordination',
			],
		},
		gallery: [
			'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
			'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87',
			'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198',
		],
	},
	{
		title: 'Kitchen Remodel in Cupertino',
		type: 'Kitchen Remodel',
		image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1',
		slug: 'kitchen-remodel-in-cupertino',
		description:
			'Complete kitchen renovation featuring custom cabinetry, quartz countertops, and modern appliances.',
		details: {
			location: 'Cupertino, CA',
			yearCompleted: '2022',
			sqft: '350',
			services: ['Interior Design', 'Construction Management', 'Permitting'],
		},
		gallery: [
			'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1',
			'https://images.unsplash.com/photo-1556911220-bff31c812dba',
			'https://images.unsplash.com/photo-1556911261-6bd341186b2f',
		],
	},
	{
		title: 'Foundation Inspection in Sunnyvale',
		type: 'Foundation Inspection',
		image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
		slug: 'foundation-inspection-in-sunnyvale',
		description:
			'Comprehensive foundation assessment and repair recommendations for a residential property in Sunnyvale.',
		details: {
			location: 'Sunnyvale, CA',
			yearCompleted: '2023',
			sqft: '1,800',
			services: [
				'Structural Inspection',
				'Engineering Report',
				'Repair Documentation',
			],
		},
		gallery: [
			'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
			'https://images.unsplash.com/photo-1583608621227-18ab3c0b5ee0',
			'https://images.unsplash.com/photo-1585545335882-3a851d02343e',
		],
	},
	{
		title: 'Deck Design in Mountain View',
		type: 'Deck Design',
		image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2',
		slug: 'deck-design-in-mountain-view',
		description:
			'Custom elevated deck with built-in seating and pergola, designed to maximize outdoor living space.',
		details: {
			location: 'Mountain View, CA',
			yearCompleted: '2022',
			sqft: '450',
			services: [
				'Architectural Design',
				'Structural Engineering',
				'Permit Application',
			],
		},
		gallery: [
			'https://images.unsplash.com/photo-1591825729269-caeb344f6df2',
			'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e',
			'https://images.unsplash.com/photo-1567405319450-a8d6b656826c',
		],
	},
	{
		title: 'Bath Remodel in Santa Clara',
		type: 'Bath Remodel',
		image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
		slug: 'bath-remodel-in-santa-clara',
		description:
			'Luxury bathroom renovation with walk-in shower, freestanding tub, and custom vanity.',
		details: {
			location: 'Santa Clara, CA',
			yearCompleted: '2021',
			sqft: '120',
			services: [
				'Interior Design',
				'Construction Management',
				'Plumbing Coordination',
			],
		},
		gallery: [
			'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
			'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14',
			'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
		],
	},
	{
		title: 'House Extension in Saratoga',
		type: 'House Extension',
		image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
		slug: 'house-extension-in-saratoga',
		description:
			'Two-story home addition including a master suite, home office, and expanded kitchen area.',
		details: {
			location: 'Saratoga, CA',
			yearCompleted: '2023',
			sqft: '950',
			services: [
				'Architectural Design',
				'Structural Engineering',
				'Project Management',
			],
		},
		gallery: [
			'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
			'https://images.unsplash.com/photo-1583608205776-babe4e9b7094',
			'https://images.unsplash.com/photo-1576941089067-2de3c901e126',
		],
	},
	{
		title: 'New Construction in Los Altos',
		type: 'New Construction',
		image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
		slug: 'new-construction-in-los-altos',
		description:
			'Modern 3,500 sq. ft. custom home featuring sustainable design principles and smart home technology.',
		details: {
			location: 'Los Altos, CA',
			yearCompleted: '2023',
			sqft: '3,500',
			services: [
				'Architectural Design',
				'Structural Engineering',
				'Permit Application',
				'Construction Management',
			],
		},
		gallery: [
			'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
			'https://images.unsplash.com/photo-1600607687644-a24d0ffa3cce',
			'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
		],
	},
	{
		title: 'Garage Conversion ADU in San Jose',
		type: 'ADU Design',
		image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1',
		slug: 'garage-conversion-adu-in-san-jose',
		description:
			'Conversion of an existing two-car garage into a 400 sq. ft. ADU with studio layout and full amenities.',
		details: {
			location: 'San Jose, CA',
			yearCompleted: '2022',
			sqft: '400',
			services: [
				'Architectural Design',
				'Conversion Planning',
				'Permit Documentation',
			],
		},
		gallery: [
			'https://images.unsplash.com/photo-1558036117-15d82a90b9b1',
			'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
			'https://images.unsplash.com/photo-1558981822-0c0c5b070026',
		],
	},
];
