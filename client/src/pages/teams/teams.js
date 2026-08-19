import React from "react";

import styles from './Teams.module.css';

const teamData = {
	stats: { members: 71, departments: 5, events: 100 },
	team: [
		{
			section: "IIC Co-ordinators",
			// icon: "🎓",
			description:
				"Our faculty coordinators provide academic guidance and institutional support, bridging the gap between innovation initiatives and curriculum integration. They ensure IIC's alignment with educational objectives while fostering an entrepreneurial ecosystem.",
			reverse: false,
			members: [
				{ name: "Dr. M.Y, Bhanu Murthy", role: "Faculty Coordinator", bio: "Guides innovation and entrepreneurship initiatives.", initials: "YMR", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/co-oridinators/WhatsApp%20Image%202026-08-17%20at%2011.37.27%20PM.jpeg" },
				{ name: "Dr. Krishna Prasad", role: "Faculty Coordinator", bio: "Facilitates institutional partnerships and R&D.", initials: "SS", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/co-oridinators/WhatsApp%20Image%202026-08-17%20at%2011.37.28%20PM.jpeg" },
				{ name: "Ch. Kalyan", role: "Faculty Coordinator", bio: "Supports curriculum integration and student mentorship.", initials: "AA", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/co-oridinators/WhatsApp%20Image%202026-08-17%20at%2011.37.28%20PM%20(1).jpeg" },
			]
		},
		{
			section: "IIC Presidents",
			// icon: "👑",
			description:
				"Student leaders who spearhead IIC activities and represent the innovation council. They coordinate between various teams, drive strategic initiatives, and ensure effective execution of all programs while maintaining a vibrant entrepreneurial culture on campus.",
			reverse: true,
			members: [
				{ name: "Pavan Kalyan S", role: "President", bio: "Leads council and strategic initiatives.", initials: "PK", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Presidents/president.jpg" },
				{ name: "Jessy Gladwin", role: "Vice President", bio: "Coordinates team activities and outreach.", initials: "JG", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Presidents/JESSY%20GLADWIN-%20vice.png" },
				{ name: "Dinesh Reddy T", role: "Secretary", bio: "Ensures vibrant entrepreneurial culture.", initials: "TDR", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Presidents/Tangirala%20Dinesh%20Reddy%20-%20sec.jpg" }
			]
		},
		{
			section: "Social Media Department",
			// icon: "👑",
			description:
				"The Social Media Department is the digital voice of IIC, responsible for creating engaging content that highlights innovation, entrepreneurship, and student achievements. They manage all social media platforms, ensuring consistent branding and effective communication with the IIC community.", reverse: true,
			members: [
				{ name: "Jithendra Soorisetti", role: "SM Member", bio: "Creates engaging content.", initials: "JS", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/1000149909%20-%20Jithendra%20Soorisetti.jpg" },
				{ name: "Sujan Atchala", role: "SM Member", bio: "Manages social media platforms.", initials: "SA", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/DSC00585%20-%20Sujan%20Atchala.jpg" },
				{ name: "Chandra Lekha Chillakuri", role: "SM Member", bio: "Ensures consistent branding.", initials: "CC", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/DSC_0318%20-%20Chandra%20lekha%20Chillakuri.jpg" },
				{ name: "Thanuja Venuthurumilli", role: "SM Member", bio: "Handles digital communication.", initials: "TV", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/file_000000002fd88211806020004ed11fa4%20-%20Thanuja%20Venuthurumilli.png" },
				{ name: "Rebel Mahi", role: "SM Member", bio: "Creates engaging content.", initials: "RM", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/file_00000000d4e48208a13ca3651a7e3cda%20-%20REBEL%20MAHI.png" },
				{ name: "Jaii Purii", role: "SM Member", bio: "Manages social media platforms.", initials: "JP", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/IMG-20260306-WA0188%20-%20Jaii%20Purii.jpg" },
				{ name: "Kodamala Anupama", role: "SM Member", bio: "Ensures consistent branding.", initials: "KA", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/IMG-20260710-WA0122%20-%20Kodamala%20Anupama.jpg" },
				{ name: "Murali", role: "SM Member", bio: "Handles digital communication.", initials: "M", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/IMG_20260512_201444%20-%20thelateral%209.jpg", imgStyle: { objectFit: "contain", objectPosition: "center" } },
				{ name: "Alasandalapalli Naga Jayanth", role: "SM Member", bio: "Creates engaging content.", initials: "AJ", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/IMG_20260813_104903%20-%20Alasandalapalli%20Naga%20jayanth.jpg" },
				{ name: "Harshi Seelam", role: "SM Member", bio: "Manages social media platforms.", initials: "HS", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/IMG_20260815_172502%20-%20Harshi%20Seelam.png" },
				{ name: "Tavva Venkata Manasa Jyothi", role: "SM Member", bio: "Ensures consistent branding.", initials: "TJ", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/IMG_20260815_173327%20-%20Tavva%20Venkata%20Manasa%20Jyothi.jpg" },
				{ name: "Vyshnavi Kalla", role: "SM Member", bio: "Handles digital communication.", initials: "VK", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/IMG_20260815_181713%20-%20Vyshnavi%20Kalla.png" },
				{ name: "Sumaya Parvin Shaik", role: "SM Member", bio: "Creates engaging content.", initials: "SS", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/SMD/S2%20-%20Sumaya%20parvin%20Shaik.jpeg" }
			]
		},
		{
			section: "Public Relations",
			// icon: "🤝",
			description:
				"Our PR team builds and maintains relationships with external stakeholders, media, industry partners, and alumni. They manage IIC's public image, coordinate outreach programs, and create strategic partnerships that enhance our institution's innovation ecosystem.",
			reverse: false,
			members: [
				// { name: "Pranav", role: "PR Lead", bio: "Manages public image and outreach.", initials: "PN", image: "" },
				// { name: "Jaya Gopal", role: "PR Member", bio: "Coordinates media and alumni relations.", initials: "JG", image: "" },
				// { name: "Bhavya", role: "PR Member", bio: "Supports stakeholder engagement.", initials: "BM", image: "" },
				// { name: "Sravani", role: "PR Member", bio: "Handles event communications.", initials: "S", image: "" },
				// { name: "Yashwanth", role: "PR Member", bio: "Creates strategic partnerships.", initials: "YU", image: "" },
				// { name: "Kiran", role: "PR Member", bio: "Manages outreach programs.", initials: "KN", image: "" },
				{ name: "Yogyasree Palapala", role: "PR Member", bio: "Supports stakeholder engagement.", initials: "YP", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/564E9769-47DE-4E74-8960-2DFB51B29C9E%20-%20Yogyasree%20Palapala.png" },
				{ name: "Nithish Kumar Ambati", role: "PR Member", bio: "Manages outreach programs.", initials: "NA", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/file_00000000114c82088daf120fb8ee3ea8%20-%20Nithish%20Kumar%20Ambati.png" },
				{ name: "Haasin", role: "PR Member", bio: "Handles event communications.", initials: "H", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/file_0000000060788211b9f9e066df65c37e%20-%20Haasin.png" },
				{ name: "Rohit Lam", role: "PR Member", bio: "Coordinates media relations.", initials: "RL", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/file_00000000653082089da49b97f5412b94%20-%20Rohit%20Lam.png" },
				{ name: "Suguna Prakash Gajjalakonda", role: "PR Member", bio: "Creates strategic partnerships.", initials: "SG", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/id_img%20-%20Suguna%20prakash%20Gajjalakonda.png" },
				{ name: "Udvika Yeleti", role: "PR Member", bio: "Supports stakeholder engagement.", initials: "UY", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/iic%20card%20-%20Udvika%20Yeleti.jpg" },
				{ name: "Devi sree", role: "PR Member", bio: "Coordinates media and alumni relations.", initials: "DS", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/Image-457258282%20-%20Devi%20sree.jpg" },
				{ name: "Bindu Meghana", role: "PR Member", bio: "Manages outreach programs.", initials: "BM", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/IMG-20251221-WA0040%20-%20bindu%20meghana.jpg" },
				{ name: "Mustaffa", role: "PR Member", bio: "Handles event communications.", initials: "M", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/IMG-20260815-WA0014%20-%20Mustaffa.jpg" },
				{ name: "Vaishnavi Maguluri", role: "PR Member", bio: "Creates strategic partnerships.", initials: "VM", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/IMG-20260815-WA0046%20-%20Vaishnavi%20Maguluri.jpg" },
				{ name: "Sumanjali Machavarapu", role: "PR Member", bio: "Supports stakeholder engagement.", initials: "SM", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/IMG_20250114_113913299_AE%20-%20Sumanjali%20Machavarapu.jpg" },
				{ name: "Mojesh", role: "PR Member", bio: "Coordinates media and alumni relations.", initials: "M", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/IMG_20260815_215103%20-%20Mojesh.jpg" },
				{ name: "Peeka Tarun Dev", role: "PR Member", bio: "Manages outreach programs.", initials: "PT", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/Polish_20260815_172757733%20-%20Peeka%20Tarun%20Dev.png" },
				{ name: "Lohithaksha Sugguna", role: "PR Member", bio: "Handles event communications.", initials: "LS", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/Polish_20260815_183240338%20-%20LOHITHAKSHA%20SUGGUNA.png" },

				{ name: "Teju Kakani", role: "PR Member", bio: "Supports stakeholder engagement.", initials: "TK", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/PR/teju-1230705886%20-%20Teju%20Kakani.jpg" }
			]
		},
		{
			section: "Web Designing",
			// icon: "💻",
			description:
				"The web designing team develops and maintains IIC's digital infrastructure. They create user-friendly websites, design interfaces, implement features, ensure responsive design, and provide technical solutions that enhance online user experience and accessibility.",
			reverse: false,
			members: [
				// { name: "Chaitanya", role: "Web Lead", bio: "Develops and maintains digital infrastructure.", initials: "CC", image: "" },
				// { name: "Jaya Harsha", role: "Web Member", bio: "Designs interfaces and features.", initials: "JH", image: "" },
				// { name: "Sravani", role: "Web Member", bio: "Ensures responsive design.", initials: "S", image: "" },
				// { name: "Vamsi", role: "Web Member", bio: "Enhances user experience.", initials: "V", image: "" },
				{ name: "Leela Chaitanya", role: "Web Head", bio: "Develops digital infrastructure.", initials: "LC", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Web/WA_1786806535851%20-%20Leela%20Chaitanya.jpg" },
				{ name: "Harsha Vardhan J", role: "Web Member", bio: "Ensures responsive design.", initials: "HJ", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Web/file_00000000166c8211aa55d23f66eef0da%20-%20Harsha%20vardhan%20J.png" },
				{ name: "Harini Sai", role: "Web Member", bio: "Designs interfaces and features.", initials: "LC", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Web/Screenshot%202026-08-18%20004950.png", imgStyle: { transform: "scale(1.4)", objectPosition: "center 20%" } },
				{ name: "Rishitha", role: "Web Member", bio: "Ensures responsive design.", initials: "K", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Web/IMG_20260815_154627%20-%20KRishitha.jpg" },
				{ name: "SivaNaik M", role: "Web Member", bio: "Develops digital infrastructure.", initials: "SR", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Web/IMG-20260815-WA0024%20-%20Santosh%20Reddy.jpg" },
				{ name: "Durga Vyshnavi Lingamneni", role: "Web Member", bio: "Enhances user experience.", initials: "DL", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Web/IMG_20260425_141215683_HDR_PORTRAIT%20-%20Durga%20vyshnavi%20Lingamneni.jpg" },
				{ name: "Neha Latha", role: "Web Member", bio: "Designs interfaces and features.", initials: "NL", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Web/photo%20-%20Neha%20Latha.png" },
				{ name: "Yasaswini Gorrepati", role: "Web Member", bio: "Enhances user experience.", initials: "YG", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Web/Screenshot%202026-08-15%20164723%20-%20yasaswini%20Gorrepati.png" },
				{ name: "Revant Akurathi", role: "Web Member", bio: "Develops digital infrastructure.", initials: "RA", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Web/MY%20PHOTO%20-%20REVANT%20AKURATHI.png" },
				{ name: "Santosh Reddi", role: "Web Member", bio: "Develops digital infrastructure.", initials: "SR", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Web/mine.jpg" },

			]
		},
		{
			section: "Events",
			// icon: "🎉",
			description:
				"The events team conceptualizes and executes all IIC programs including hackathons, workshops, competitions, and seminars. They handle logistics, vendor coordination, participant management, and ensure every event creates memorable learning experiences that inspire innovation.",
			reverse: true,
			members: [
				{ name: "Chaitanya", role: "Events Member", bio: "Supports event planning.", initials: "CVB", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/Screenshot%202026-08-18%20005149.png", imgStyle: { objectPosition: "center" } },
				{ name: "Dharani Jagarlamudi", role: "Events Member", bio: "Supports event logistics.", initials: "DJ", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/20260816_113331%20-%20Dharani%20Jagarlamudi.jpg", imgStyle: { objectPosition: "center" } },
				{ name: "Likitha Boppudi", role: "Events Member", bio: "Helps organize activities.", initials: "LB", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/Screenshot%202026-08-17%20225555.png", imgStyle: { objectPosition: "center" } },
				{ name: "Prasanna Kumari", role: "Events Member", bio: "Coordinates participant experience.", initials: "PK", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/compressed_1786792866129%20-%20Prasanna%20Kumari.jpg", imgStyle: { objectPosition: "center" } },
				{ name: "Leelasaikrishna", role: "Events Member", bio: "Maintains event schedules.", initials: "L", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/file_00000000587082119c2b50b1d7b0fd21%20-%20Leelasaikrishna.png", imgStyle: { objectPosition: "center" } },
				{ name: "Sindhu", role: "Events Member", bio: "Assists with stage setup.", initials: "S", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/file_000000005a78821192be44bb35ba792d%20-%20Sindhu_0902.png", imgStyle: { objectPosition: "center" } },
				{ name: "Shabana Shaik", role: "Events Member", bio: "Coordinates resources.", initials: "SS", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/iic%20-%20Shabana%20Shaik.png", imgStyle: { objectPosition: "center" } },
				{ name: "Bhaeru Nutakki", role: "Events Member", bio: "Manages guest relations.", initials: "BN", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/IMG-20260113-WA2599%20-%20Bhaeru%20Nutakki.jpg", imgStyle: { objectPosition: "center" } },
				{ name: "Srujana Nanduri", role: "Events Member", bio: "Supports event planning.", initials: "SN", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/IMG-20260815-WA0016%20-%20Srujana%20Nanduri.jpg", imgStyle: { objectPosition: "center" } },
				{ name: "Akhilesh Kamineni", role: "Events Member", bio: "Handles technical support.", initials: "AK", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/IMG-20260816-WA0002%20-%20Akhilesh%20Kamineni.jpg", imgStyle: { objectPosition: "top" } },
				{ name: "Saran M", role: "Events Member", bio: "Assists with media.", initials: "SM", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/IMG_20260730_133105%20-%20Saran%20.m.jpg", imgStyle: { objectPosition: "center" } },
				{ name: "Aaradhya Guntupalli", role: "Events Member", bio: "Helps in participant engagement.", initials: "AG", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/IMG_20260815_163750%20-%20Aaradhya%20Guntupalli.jpg", imgStyle: { objectPosition: "center" } },
				{ name: "Kandula Meghana", role: "Events Member", bio: "Supports on-ground execution.", initials: "KM", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/Kandula%20Meghana.png", imgStyle: { objectPosition: "center" } },
				{ name: "Keerthana Varra", role: "Events Member", bio: "Event logistics assistant.", initials: "KV", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/Kphoto_10MB-1%20-%20Keerthana%20Varra.jpg", imgStyle: { objectPosition: "center" } },
				{ name: "Gayathri Veeranki", role: "Events Member", bio: "Coordinates with vendors.", initials: "GV", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/photo_10mb-3%20-%20Gayathri%20Veeranki.jpg", imgStyle: { objectPosition: "center" } },
				{ name: "Spandana", role: "Events Member", bio: "Event day operations coordinator.", initials: "S", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Events/Screenshot_2025-10-07-21-52-37-925_com.miui.gallery%20-%20Spandana%20Spandana.jpg", imgStyle: { objectPosition: "center" } }
			]
		},
		{
			section: "Review & Validation",
			// icon: "✅",
			description:
				"The Review & Validation team is responsible for ensuring quality, reviewing content, and validating processes to maintain high standards across all IIC activities.",
			reverse: true,
			members: [
				{ name: "Lekhana Chowdary Talluri", role: "Review & Validation", bio: "Ensures quality and validates processes.", initials: "LT", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/d45f8fd8-8900-4661-aada-59be1c0d9798%20-%20Lekhana%20chowdary%20Talluri.jpeg", imgStyle: { objectPosition: "center" } },
				{ name: "Lakshmi Appikatla", role: "Review & Validation", bio: "Reviews activities to maintain high standards.", initials: "LA", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/file_0000000091888211af1f52284578601f%20-%20Lakshmi%20Appikatla.png", imgStyle: { objectPosition: "center" } },
				{ name: "Abhi Battula", role: "Review & Validation", bio: "Ensures quality and validates processes.", initials: "AB", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/file_00000000a0d482119a4b5b6ae9534e22%20-%20Abhi%20Battula.png", imgStyle: { objectPosition: "center" } },
				{ name: "Srujana Nanduri", role: "Review & Validation", bio: "Reviews activities to maintain high standards.", initials: "SN", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/file_00000000c0e882119e1ea1866146ddce%20-%20Srujana%20Nanduri.png", imgStyle: { objectPosition: "center" } },
				{ name: "Avinash Kaja", role: "Review & Validation", bio: "Ensures quality and validates processes.", initials: "AK", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/IMG_20260815_172624%20-%20Avinash%20Kaja.png", imgStyle: { objectPosition: "center" } },
				{ name: "Mohana Vaddi", role: "Review & Validation", bio: "Reviews activities to maintain high standards.", initials: "MV", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/IMG_20260816_082036%20-%20mohana26%20vaddi.jpg", imgStyle: { objectPosition: "center" } },
				{ name: "Sai Spurthi Kalam", role: "Review & Validation", bio: "Ensures quality and validates processes.", initials: "SK", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/r&v%20id%20-%20Sai%20Spurthi%20Kalam.jpg", imgStyle: { objectPosition: "center" } },
				{ name: "R&V Member", role: "Review & Validation", bio: "Reviews activities to maintain high standards.", initials: "RM", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/Screenshot%202026-08-17%20191458.png", imgStyle: { objectPosition: "center" } },
				{ name: "R&V Member", role: "Review & Validation", bio: "Ensures quality and validates processes.", initials: "RM", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/Screenshot%202026-08-17%20191612.png", imgStyle: { objectPosition: "center" } },
				{ name: "R&V Member", role: "Review & Validation", bio: "Reviews activities to maintain high standards.", initials: "RM", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/Screenshot%202026-08-17%20225501.png", imgStyle: { objectPosition: "center" } },
				{ name: "Sudheerkumar Karra", role: "Review & Validation", bio: "Ensures quality and validates processes.", initials: "SK", image: "https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/R&V/Screenshot_2025-11-22-13-41-09-50_99c04817c0de5652397fc8b56c3b3817%20-%20Sudheerkumar%20Karra.jpg", imgStyle: { objectPosition: "center" } }
			]
		}

	]
};

function Teams() {
	const [fetchedTeams] = React.useState(teamData.team);
	const [loading] = React.useState(false);

	// Backend fetch removed to allow for manual manual static image update

	return (
		<div className={styles.wrap}>

			<main>
				<div className={styles['hero-teams']}>
					<h1>IIC Teams 2025</h1>
					<p>Meet the passionate faculty and student teams driving innovation, entrepreneurship, and impactful events at VVITU IIC.</p>
					<div className={styles['hero-stats']}>
						<div className={styles['stat-item']}>
							<span className={styles['stat-number']}>{teamData.stats.members}</span>
							<span className={styles['stat-label']}>Team Members</span>
						</div>
						<div className={styles['stat-item']}>
							<span className={styles['stat-number']}>{teamData.stats.departments}</span>
							<span className={styles['stat-label']}>Departments</span>
						</div>
						<div className={styles['stat-item']}>
							<span className={styles['stat-number']}>{teamData.stats.events}+</span>
							<span className={styles['stat-label']}>Events Organized</span>
						</div>
					</div>
				</div>

				{loading && (
					<div style={{ textAlign: 'center', padding: '100px', fontSize: '18px', color: '#666' }}>
						Loading Team Directory... <i className="fa-solid fa-circle-notch fa-spin"></i>
					</div>
				)}

				{!loading && fetchedTeams.map((section, idx) => {
					return (
						<div className={styles['team-section']} key={section.section}>
							<div className={styles['section-intro'] + (section.reverse ? ` ${styles['reverse']}` : "")}>
								<div className={styles['section-icon']}>{section.icon}</div>
								<div className={styles['section-text']}>
									<h2>{section.section}</h2>
									<p>{section.description}</p>
								</div>
							</div>

							<div className={styles['grid-wrapper']}>
								<div className={styles['grid-content']}>
									{section.members.map((member, mIdx) => (
										<div className={`${styles['member-card']} hover-3d`} key={`${member.name}-${mIdx}`}>
											<figure className={styles['member-figure']}>
												<img
													src={member.image || `https://i.pravatar.cc/300?u=${encodeURIComponent(member.name)}`}
													alt={member.name}
													className={styles['member-image']}
													style={member.imgStyle || {}}
													loading="lazy"
												/>
											</figure>
											<div className={styles['member-body']}>
												<h2 className={styles['member-name']}>{member.name}</h2>
												<div className={styles['member-role']}>{member.role}</div>
												<p className={styles['member-bio']}>{member.bio}</p>
											</div>
											<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
										</div>
									))}
								</div>
							</div>
						</div>
					)
				})}
			</main>

		</div>
	);
}

export default Teams;
