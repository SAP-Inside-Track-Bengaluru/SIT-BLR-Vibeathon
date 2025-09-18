import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Code, Users, Trophy, Coffee, Lightbulb, Sparkles } from 'lucide-react';
import { TimelineItem } from "@/components/ui/timeline";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const schedule = [
	{
		time: '07:45 – 09:00',
		title: 'Registration & Breakfast',
		description: 'Students check in, grab badges, enjoy breakfast, light networking.',
		icon: Users,
	},
	{
		time: '09:00 – 09:30',
		title: 'Kick-Off Ceremony & System Setup',
		description: 'Welcome note, SAP Inside Track context, rules explained, mentor introductions, and quick system setup (GitHub Copilot, etc.).',
		icon: Sparkles,
	},
	{
		time: '09:30 – 12:30',
		title: 'Hacking Sprint I',
		description: 'Brainstorm, prototype, and build! Mentors support during Sprint I.',
		icon: Code,
	},
	{
		time: '12:30 - 12:45',
		title: 'Checkpoint',
		description: 'Submit your prototype or mockup for review.',
		icon: Lightbulb,
	},
	{
		time: '12:45 – 02:45',
		title: 'Hacking Sprint II',
		description: 'Final stretch to refine ideas, prepare submission and demos.',
		icon: Code,
	},
	{
		time: '02:45 – 3:30',
		title: 'Code Freeze & Submission',
		description: 'All projects submitted (GitHub + description + short demo). Teams get ready for showcase.',
		icon: Clock,
	},
	{
		time: '03:30 – 04:30',
		title: 'Project Evaluation',
		description: 'Judges circulate; each team delivers a 3-min live demo + 2-min Q&A.',
		icon: Users,
	},
	{
		time: '04:30 – 05:30',
		title: 'Awards & Closing Vibes',
		description: 'Judges announce winners, special prizes, and closing thanks. Group photo + networking wrap-up.',
		icon: Trophy,
	}
];

const ScheduleSection = () => {
	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Animated background elements */}
			<motion.div
				className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.2, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					repeatType: "reverse"
				}}
			/>
			<motion.div
				className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
				animate={{
					scale: [1.2, 1, 1.2],
					opacity: [0.2, 0.3, 0.2],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					repeatType: "reverse",
					delay: 2
				}}
			/>

			<div className="max-w-6xl mx-auto relative">
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-6"
					>
						<div className="relative inline-block">
							<motion.div
								className="absolute -top-6 -left-6 text-blue-500/80"
								animate={{
									rotate: [0, 360],
									scale: [1, 1.2, 1]
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "linear"
								}}
							>
								<Sparkles className="w-6 h-6" />
							</motion.div>

							<h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
								Event Schedule
							</h2>

							<motion.div
								className="absolute -top-6 -right-6 text-blue-400/80"
								animate={{
									rotate: [360, 0],
									scale: [1, 1.2, 1]
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "linear"
								}}
							>
								<Sparkles className="w-6 h-6" />
							</motion.div>
						</div>
					</motion.div>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-xl text-muted-foreground max-w-2xl mx-auto"
					>
						Three days of intense coding, learning, and innovation
					</motion.p>
				</div>

				<div className="relative">
					{/* Connected Hexagon Timeline */}
					<div className="grid grid-cols-1 gap-16">
						{schedule.map((event, index) => {
							const IconComponent = event.icon;
							const isEven = index % 2 === 0;

							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="relative"
								>
									{/* Connecting Line */}
									{index < schedule.length - 1 && (
										<motion.div
											className="absolute left-1/2 top-full h-16 w-px"
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: 0.2 }}
										>
											<div className="h-full w-full bg-gradient-to-b from-blue-500 to-transparent" />
										</motion.div>
									)}

									<div className="flex flex-col items-center">
										{/* Hexagon Icon Container */}
										<motion.div
											className="relative mb-6"
											whileHover={{ scale: 1.1 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur-lg opacity-50" />
											<div className="relative bg-gradient-to-r from-blue-500 to-blue-400 p-4 rounded-lg transform rotate-45">
												<div className="transform -rotate-45">
													<IconComponent className="w-8 h-8 text-white" />
												</div>
											</div>
										</motion.div>

										{/* Content Card */}
										<motion.div
											whileHover={{ scale: 1.02 }}
											transition={{ type: "spring", stiffness: 200 }}
											className="w-full max-w-2xl mx-auto"
										>
											<Card className="glass-card group hover:shadow-xl dark:hover:shadow-blue-500/20 
                        transition-all duration-500 border border-blue-500/20 overflow-hidden">
												<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-400/5 
                          group-hover:from-blue-500/10 group-hover:to-blue-400/10 transition-all duration-500" />

												<CardHeader>
													<div className="flex flex-col items-center text-center gap-2">
														<div className="flex items-center gap-3">
															<div className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-400/10 
                                text-sm font-medium text-blue-500">{event.time}</div>
														</div>

														<CardTitle className="text-xl md:text-2xl font-bold mt-2 bg-gradient-to-r 
                              from-blue-500 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
															{event.title}
														</CardTitle>
													</div>
												</CardHeader>

												<CardContent>
													<motion.p
														className="text-center text-muted-foreground group-hover:text-foreground/80 
                              transition-colors duration-300 max-w-lg mx-auto"
													>
														{event.description}
													</motion.p>
												</CardContent>
											</Card>
										</motion.div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ScheduleSection;