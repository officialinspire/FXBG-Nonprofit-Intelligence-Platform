// FXBG Nonprofit Network Intelligence Platform
// Main JavaScript Module

// ========== DATA STRUCTURE ==========
const nonprofitData = {
    "organizations": [
        {
            "id": "moss-clinic",
            "name": "Lloyd F. Moss Free Clinic",
            "type": "healthcare",
            "status": "defunct",
            "mission": "Provided free medical care and pharmacy services to uninsured adults in Fredericksburg region from 1993-2025",
            "budget": "$6.8M (2023 expenses)",
            "revenue": "$2M cash (plus in-kind)",
            "leadership": [
                {
                    "name": "Karen Dulaney",
                    "role": "Executive Director (former)",
                    "connections": []
                },
                {
                    "name": "Thomas Brashears",
                    "role": "Executive Director (2024)",
                    "connections": []
                },
                {
                    "name": "Dr. Patrick Neustatter",
                    "role": "Medical Director",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Served 7,500 patient visits in 2023",
                "Dispensed 73,000 prescriptions annually",
                "Pharmacy hub for 14 free clinics statewide",
                "Raised $234,000 in emergency fundraising campaign"
            ],
            "riskFactors": "CLOSED June 12, 2025 - Lost MWHC in-kind support, donor fatigue, high overhead costs. Immediate closure with 15 minutes notice to staff.",
            "news": "Closed immediately June 12, 2025 after running out of money. Left significant gap in healthcare access for low-income residents.",
            "connections": [
                "mwhc"
            ],
            "founded": 1993,
            "employees": "15+ staff",
            "volunteers": "Numerous medical volunteers"
        },
        {
            "id": "gwyneth-gift",
            "name": "Gwyneth's Gift Foundation",
            "type": "healthcare",
            "status": "stable",
            "mission": "Improving survival from sudden cardiac arrest through CPR training, AED placement, and awareness programs",
            "budget": "~$200K annually (estimated)",
            "leadership": [
                {
                    "name": "Joel Griffin",
                    "role": "Chairman & Co-founder",
                    "connections": [
                        "legal-aid"
                    ]
                },
                {
                    "name": "Jennifer Griffin",
                    "role": "President & Co-founder",
                    "connections": []
                },
                {
                    "name": "Joe DiStefano",
                    "role": "Board Member",
                    "connections": []
                },
                {
                    "name": "Amy Stanford",
                    "role": "Board Member",
                    "connections": [
                        "ymca"
                    ]
                }
            ],
            "keyProjects": [
                "15,000 people trained in Hands-Only CPR",
                "99 AEDs placed cumulatively",
                "Gwyneth's Law - mandated AEDs in all VA public schools",
                "PulsePoint CPR notification app in Stafford County",
                "Annual Mom Prom fundraising gala",
                "Healthcare scholarships for students"
            ],
            "riskFactors": "Stable with good community support. Risk: maintaining fundraising momentum as founder's story grows distant. Founder-dependent model.",
            "news": "Continues expanding CPR training programs. Added new board members in 2024.",
            "connections": [
                "mwhc"
            ],
            "founded": 2015,
            "transparency": "Guidestar Gold Transparency"
        },
        {
            "id": "ruw",
            "name": "Rappahannock United Way",
            "type": "philanthropy",
            "status": "stable",
            "mission": "Supporting education, financial stability, and health programs. Vision: community where individuals and families achieve their potential",
            "budget": "$1.67M revenue (FY2024)",
            "expenses": "$1.91M (FY2024)",
            "netAssets": "$1.8M in reserves",
            "leadership": [
                {
                    "name": "Janel S. Donohue",
                    "role": "President/CEO (~$126K salary)",
                    "connections": []
                },
                {
                    "name": "Ron Holmes",
                    "role": "Board Chair (2025-26)",
                    "connections": []
                },
                {
                    "name": "Sean Barden",
                    "role": "Treasurer",
                    "connections": []
                },
                {
                    "name": "Brooke Miller",
                    "role": "Secretary",
                    "connections": []
                },
                {
                    "name": "Sarah Walsh",
                    "role": "Chief Impact Officer",
                    "connections": [
                        "spca",
                        "food-bank"
                    ]
                },
                {
                    "name": "Kyle Allwine",
                    "role": "Board Member",
                    "connections": [
                        "chamber"
                    ]
                }
            ],
            "keyProjects": [
                "VITA program - 1,000+ families served annually",
                "Community grants ~$500K per year",
                "ALICE Report on asset-limited households",
                "Financial coaching and education workshops",
                "Year-round free tax preparation",
                "COVID emergency relief coordination"
            ],
            "riskFactors": "Declining workplace donations (national trend). Had $230K deficit in FY2024 covered by reserves. Must diversify fundraising beyond traditional workplace campaigns.",
            "news": "Expanding individual giving campaigns to offset workplace campaign decline. Helped 800+ people file tax returns in 2024.",
            "connections": [
                "legal-aid",
                "empowerhouse",
                "habitat",
                "food-bank",
                "cf"
            ],
            "partners": "70+ partner agencies funded"
        },
        {
            "id": "habitat",
            "name": "Central Rappahannock Habitat for Humanity",
            "type": "housing",
            "status": "stable",
            "mission": "Expanding affordable homeownership for low-income families through volunteer construction and 0% interest mortgages",
            "budget": "$1.18M revenue (FY2024)",
            "expenses": "$1.33M (FY2024)",
            "netAssets": "$3.77M (including property)",
            "leadership": [
                {
                    "name": "Jayne Johnson",
                    "role": "Executive Director (20 years experience)",
                    "connections": []
                },
                {
                    "name": "Mary Beth Rich",
                    "role": "Board President",
                    "connections": []
                },
                {
                    "name": "Dugan Caswell",
                    "role": "Secretary",
                    "connections": []
                },
                {
                    "name": "Joyce Lungstrom",
                    "role": "Treasurer",
                    "connections": []
                },
                {
                    "name": "Molly Flurry",
                    "role": "Board Member",
                    "connections": [
                        "spca",
                        "for",
                        "food-bank"
                    ]
                },
                {
                    "name": "Cynthia Avallone",
                    "role": "Board Member",
                    "connections": []
                }
            ],
            "keyProjects": [
                "2-4 homes built annually",
                "20-home subdivision planned in Ladysmith, Caroline County",
                "ReStore thrift operations (~$300K revenue)",
                "Student-built house at Caroline High School",
                "Faith Build partnerships with churches",
                "Home repair program for elderly/disabled",
                "30th anniversary celebration"
            ],
            "riskFactors": "Budget volatility based on build activity. Rising construction costs and land scarcity. Ran modest deficit in FY2024. Must pace builds with fundraising.",
            "news": "Breaking ground on 9 new homes in Caroline County (2025). Broadening pathways to homeownership with innovative approaches.",
            "connections": [
                "ruw",
                "micah",
                "for",
                "cf"
            ],
            "founded": 1995,
            "rating": "3 out of 4 stars Charity Navigator"
        },
        {
            "id": "food-bank",
            "name": "Fredericksburg Regional Food Bank",
            "type": "food",
            "status": "moderate",
            "mission": "Unite central Rappahannock River region in reducing hunger by sourcing and distributing nutritious food",
            "budget": "$21.7M total revenue (2024) - includes donated food",
            "cashRevenue": "$2-3M annually",
            "expenses": "$17.5M (2024)",
            "netAssets": "$2.36M",
            "leadership": [
                {
                    "name": "Dan Maher",
                    "role": "President & CEO",
                    "connections": []
                },
                {
                    "name": "Jeremy Bullock",
                    "role": "Board Chair",
                    "connections": []
                },
                {
                    "name": "George Barnick",
                    "role": "Vice Chair",
                    "connections": [
                        "spca"
                    ]
                },
                {
                    "name": "Keith Wampler",
                    "role": "Treasurer (CPA)",
                    "connections": []
                },
                {
                    "name": "Sarah Walsh",
                    "role": "Secretary",
                    "connections": [
                        "ruw",
                        "spca"
                    ]
                },
                {
                    "name": "Tamara Robinson",
                    "role": "Board Member",
                    "connections": [
                        "mwhc"
                    ]
                },
                {
                    "name": "Johnny Powell",
                    "role": "Board Member",
                    "connections": [
                        "giant-food"
                    ]
                },
                {
                    "name": "Molly Flurry",
                    "role": "Board Member",
                    "connections": [
                        "spca",
                        "habitat",
                        "for"
                    ]
                }
            ],
            "keyProjects": [
                "4 million meals distributed annually",
                "70+ partner pantries and agencies",
                "Kids on the Go summer feeding program",
                "School Pantry programs",
                "OrderAhead online grocery ordering (Instacart partnership)",
                "Hope Heroes Community Kitchen partnership",
                "Mobile pantries (drive-thru/walk-up)",
                "Food Pharmacy prescription program",
                "SNAP outreach and enrollment"
            ],
            "riskFactors": "Rising demand with SNAP benefit cuts threatened. Donor fatigue. Inflation increasing operational costs. Heavy reliance on donated food creates inventory volatility.",
            "news": "Senator Tim Kaine visited to discuss SNAP cut impacts. Requested $165K from localities for FY2026. City increased contribution by $5K.",
            "connections": [
                "ruw",
                "mwhc",
                "hub-hope",
                "micah",
                "cf"
            ],
            "served": "Thousands food-insecure individuals",
            "rating": "4 stars Charity Navigator",
            "employees": "~35 staff"
        },
        {
            "id": "legal-aid",
            "name": "Legal Aid Works (Rappahannock Legal Services)",
            "type": "legal",
            "status": "moderate",
            "mission": "Ensuring equal access to justice for low-income individuals in critical civil matters: family law, housing, consumer issues, income support",
            "budget": "$1.7-1.8M annually",
            "leadership": [
                {
                    "name": "Ann H. Kloeckner",
                    "role": "Executive Servant-Leader (~$68.9K salary)",
                    "connections": []
                },
                {
                    "name": "Joel W. Young",
                    "role": "Board President",
                    "connections": []
                },
                {
                    "name": "Joel Griffin",
                    "role": "Board Member",
                    "connections": [
                        "gwyneth-gift"
                    ]
                },
                {
                    "name": "Sabrina Johnson",
                    "role": "Board Member (J&DR Court Judge)",
                    "connections": [
                        "court"
                    ]
                },
                {
                    "name": "Gowri Janakiramanan",
                    "role": "Board Member (Immigration Attorney)",
                    "connections": []
                },
                {
                    "name": "Alexander Reidell",
                    "role": "Managing Attorney",
                    "connections": []
                }
            ],
            "keyProjects": [
                "800+ cases annually, 2,000+ people served",
                "Domestic violence protective orders (2-year orders)",
                "Housing defense against illegal evictions",
                "U-Visa assistance for immigrant abuse victims",
                "Justice for Veterans program",
                "SSI benefits for disabled individuals",
                "Consumer protection (debt collection, predatory loans)",
                "Pro bono attorney coordination",
                "Free legal clinics"
            ],
            "riskFactors": "Federal LSC funding uncertainty (threatened in some budgets). Attorney recruitment challenges due to low salaries. Only 20% of legal needs met. Heavy demand exceeds capacity.",
            "news": "Expanding domestic violence legal services. Virginia increased state legal aid funding recently.",
            "connections": [
                "ruw",
                "empowerhouse",
                "micah",
                "cf"
            ],
            "founded": 1973,
            "offices": "Fredericksburg, Tappahannock, Culpeper",
            "staff": "5-7 attorneys plus paralegals"
        },
        {
            "id": "for",
            "name": "Friends of the Rappahannock",
            "type": "environment",
            "status": "stable",
            "mission": "Protecting health and scenic integrity of Rappahannock River and watershed through advocacy, restoration, and education",
            "budget": "$2.0M revenue (2023)",
            "expenses": "$1.89M (2023)",
            "netAssets": "$3.0M+ (including land)",
            "leadership": [
                {
                    "name": "Daria Christian",
                    "role": "Executive Director (2023)",
                    "connections": []
                },
                {
                    "name": "Bryan Hofmann",
                    "role": "Deputy Director",
                    "connections": []
                },
                {
                    "name": "Lee Pugh",
                    "role": "Board Chair",
                    "connections": []
                },
                {
                    "name": "Tamara Muldrow",
                    "role": "Vice Chair",
                    "connections": []
                },
                {
                    "name": "Cynthia Lucero-Chavez",
                    "role": "Secretary",
                    "connections": []
                },
                {
                    "name": "Sam Foltz",
                    "role": "Treasurer",
                    "connections": []
                },
                {
                    "name": "Molly Flurry",
                    "role": "Board Member",
                    "connections": [
                        "spca",
                        "habitat",
                        "food-bank"
                    ]
                },
                {
                    "name": "Regis Keddie",
                    "role": "Former Board Member",
                    "connections": [
                        "micah"
                    ]
                }
            ],
            "keyProjects": [
                "40th Anniversary Capital Campaign (~$1.1M)",
                "River Education Center construction",
                "Planted tens of thousands of trees in riparian buffers",
                "Oyster reef restoration (millions of oyster spat)",
                "Living shorelines installation",
                "2,500+ students in education programs annually",
                "Summer Nature Camp",
                "Annual Riverfest fundraising gala",
                "Plant One Million partnership",
                "Legislative advocacy (secured $160M state wastewater funding)"
            ],
            "riskFactors": "Grant-dependent funding. Leadership transition (CEO search 2024). Could face cuts if environmental funding drops. Climate change increasing challenges.",
            "news": "Named Opus Prize finalist ($1M award) for environmental social entrepreneurship. CEO search ongoing.",
            "connections": [
                "habitat",
                "cf"
            ],
            "founded": 1985,
            "employees": "~34 staff"
        },
        {
            "id": "spca",
            "name": "Fredericksburg SPCA",
            "type": "animal",
            "status": "stable",
            "mission": "Providing every animal a chance at a loving home through adoption, and supporting human-animal bond with pet retention programs",
            "budget": "$1.79M (FY2024)",
            "revenue": "$1.79M (2024)",
            "leadership": [
                {
                    "name": "Laurie Webb",
                    "role": "Executive Director (since 2019)",
                    "connections": []
                },
                {
                    "name": "Brad Canova",
                    "role": "Board President",
                    "connections": []
                },
                {
                    "name": "George Barnick",
                    "role": "Vice President",
                    "connections": [
                        "food-bank"
                    ]
                },
                {
                    "name": "David Belman",
                    "role": "Treasurer",
                    "connections": []
                },
                {
                    "name": "Sarah Walsh",
                    "role": "Secretary",
                    "connections": [
                        "ruw",
                        "food-bank"
                    ]
                },
                {
                    "name": "Dr. Gregory Cox",
                    "role": "Board Member (Veterinarian)",
                    "connections": []
                },
                {
                    "name": "Molly Flurry",
                    "role": "Board Member",
                    "connections": [
                        "habitat",
                        "for",
                        "food-bank"
                    ]
                },
                {
                    "name": "Eric Herring",
                    "role": "Board Member",
                    "connections": []
                },
                {
                    "name": "Mark Steele",
                    "role": "Board Member (Former MWHC CFO)",
                    "connections": [
                        "mwhc"
                    ]
                }
            ],
            "keyProjects": [
                "No-kill shelter model (>90% save rate)",
                "Community Medical Center (low-cost veterinary clinic)",
                "2,000 animals sheltered annually",
                "Pet Pantry for low-income families",
                "Pets Program for DV survivors",
                "Behavior rehabilitation program",
                "Foster network coordination",
                "Humane Education summer camps",
                "Transport partnerships with rural shelters",
                "Spay/neuter subsidies"
            ],
            "riskFactors": "Rising veterinary costs. Staff burnout. Facility at capacity. Need sustained funding for medical center. Veterinarian retention challenges.",
            "news": "City increased funding $5K for spay/neuter expansion. Won Chamber Nonprofit of the Year 2022.",
            "connections": [
                "empowerhouse",
                "micah",
                "leashes-valor",
                "hub-hope"
            ],
            "localityFunding": "Requested $165K from localities for FY2024"
        },
        {
            "id": "leashes-valor",
            "name": "Leashes of Valor",
            "type": "veterans",
            "status": "moderate",
            "mission": "Providing highly-trained service dogs to post-9/11 military veterans with PTSD, TBI, and invisible wounds. One leash saves two lives.",
            "budget": "~$1M annually (estimated)",
            "costPerDog": "$25,000",
            "leadership": [
                {
                    "name": "Jason Haag",
                    "role": "Founder & CEO (Ret. Marine Captain)",
                    "connections": []
                },
                {
                    "name": "Samuel Lee Hayes III",
                    "role": "Board Chairman",
                    "connections": [
                        "hub-hope"
                    ]
                },
                {
                    "name": "Richard Falkenstein",
                    "role": "Treasurer",
                    "connections": [
                        "hub-hope",
                        "spca"
                    ]
                },
                {
                    "name": "Ashlee Chandler",
                    "role": "Warrior & Foster Coordinator",
                    "connections": []
                },
                {
                    "name": "Chris Bowers",
                    "role": "Director of Programs (Marine veteran)",
                    "connections": []
                },
                {
                    "name": "Karen Meadows",
                    "role": "Lead K9 Trainer",
                    "connections": []
                }
            ],
            "keyProjects": [
                "50+ veteran-dog teams paired",
                "Zero suicides among graduates",
                "Axel's Place 10-acre training facility (opened 2023)",
                "7-day intensive veteran training",
                "9+ months dog training per animal",
                "Rescue dogs from shelters",
                "Valor Cup golf tournament fundraiser",
                "National advocacy for service dog funding"
            ],
            "riskFactors": "High per-dog cost ($25K). Founder-centric model. Continuous fundraising required to scale. No guaranteed government funding yet. Small budget relative to need.",
            "news": "Celebrated 50th service dog team graduation. Axel's Place facility operational. PAWS Act advocacy for federal funding.",
            "connections": [
                "spca"
            ],
            "founded": 2017,
            "graduates": "10-15 teams annually"
        },
        {
            "id": "micah",
            "name": "Micah Ecumenical Ministries",
            "type": "housing",
            "status": "stable",
            "mission": "Ending homelessness through Housing First approach. Do justice, love mercy, walk humbly.",
            "budget": "$3.5M revenue (2023)",
            "expenses": "$3.0M (2023)",
            "leadership": [
                {
                    "name": "Meghann Cotter",
                    "role": "Executive Servant-Leader (~$72K salary)",
                    "connections": []
                },
                {
                    "name": "Clay Murray",
                    "role": "Board Chair",
                    "connections": []
                },
                {
                    "name": "Fred Rankin",
                    "role": "Board Member (Retired MWHC CEO)",
                    "connections": [
                        "mwhc",
                        "for"
                    ]
                },
                {
                    "name": "Rev. David Haun",
                    "role": "Board Member",
                    "connections": []
                },
                {
                    "name": "Rev. Tim Tate",
                    "role": "Board Member",
                    "connections": []
                },
                {
                    "name": "Regis Keddie",
                    "role": "Board Member",
                    "connections": [
                        "for"
                    ]
                },
                {
                    "name": "Peg Phillips",
                    "role": "Neighbor Care Servant-Leader",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Hesed House 80-room bridge housing (former motel)",
                "260+ people moved to permanent housing",
                "97% housing retention rate",
                "Hospitality Center day services (42,000 visits/year)",
                "Medical respite program (partnership with MWHC $135K)",
                "Cold weather shelter (80 nightly)",
                "5,000+ showers/year",
                "Employment partnership with Goodwill (35+ jobs)",
                "SOAR SSI assistance (20+ approved)",
                "Street Church weekly worship",
                "Jeremiah Community tiny homes proposal"
            ],
            "riskFactors": "Complex programs dependent on multiple funding streams. HUD or MWHC funding cuts would hurt. Staff burnout. Founder-dependent leadership. Rising rents strain subsidy budgets.",
            "news": "Opus Prize finalist for Jeremiah Community innovation. Chronic homelessness reduced 24% locally. Secured ARPA grant for Hesed House.",
            "connections": [
                "ruw",
                "legal-aid",
                "food-bank",
                "empowerhouse",
                "mwhc",
                "spca",
                "hub-hope",
                "cf"
            ],
            "founded": 2005,
            "employees": "~45 staff",
            "churches": "Founded by 8 downtown congregations"
        },
        {
            "id": "cf",
            "name": "Community Foundation of Rappahannock River Region",
            "type": "philanthropy",
            "status": "stable",
            "mission": "Supporting philanthropic wishes of donors and investing in community through grants and scholarships",
            "budget": "$60M+ in assets under management",
            "annualGrants": "$2.8M+ in grants annually",
            "revenue": "$1.53M (2024)",
            "expenses": "$1.17M (2024)",
            "leadership": [
                {
                    "name": "Teri McNally",
                    "role": "Founding CEO (Retired 2020, ~$162K salary)",
                    "connections": []
                },
                {
                    "name": "Bruce Davis",
                    "role": "Board President (former GEICO executive)",
                    "connections": []
                },
                {
                    "name": "Jamie Scully",
                    "role": "Former Board Chair",
                    "connections": []
                },
                {
                    "name": "Kimberly Young",
                    "role": "Board Member",
                    "connections": [
                        "umw"
                    ]
                },
                {
                    "name": "Lisa Baxter",
                    "role": "Finance Director",
                    "connections": []
                },
                {
                    "name": "Casey Hu",
                    "role": "Donor Services Director",
                    "connections": []
                }
            ],
            "keyProjects": [
                "220+ donor-advised funds",
                "Scholarships ~$500K/year to students",
                "COVID Emergency Relief Fund ($500K raised)",
                "Youth in Philanthropy program",
                "Local Legends Awards",
                "Community competitive grant cycle (13 funds)",
                "Capacity-building grants for nonprofits",
                "Legacy giving programs"
            ],
            "riskFactors": "Leadership transition ongoing since 2021 (CEO search). Market-dependent returns. Competition from national DAF platforms. Extended interim could slow momentum.",
            "news": "National CEO search continues for McNally replacement. Assets grown from $1M (1997) to $60M (2025).",
            "connections": [
                "ruw",
                "empowerhouse",
                "food-bank",
                "habitat",
                "for",
                "micah"
            ],
            "founded": 1997,
            "funds": "Field-of-interest, donor-advised, scholarship, endowment"
        },
        {
            "id": "empowerhouse",
            "name": "Empowerhouse (Rappahannock Council on Domestic Violence)",
            "type": "legal",
            "status": "stable",
            "mission": "Empowering domestic violence survivors through 24-hour hotline, emergency shelter, transitional housing, counseling, advocacy, and prevention education",
            "budget": "$1.5-1.8M annually",
            "leadership": [
                {
                    "name": "Kathy Anderson",
                    "role": "Executive Director (30 years)",
                    "connections": []
                },
                {
                    "name": "Donna Newell",
                    "role": "Board President",
                    "connections": []
                },
                {
                    "name": "David Rodriguez",
                    "role": "Treasurer",
                    "connections": []
                },
                {
                    "name": "Lt. Troy Skebo",
                    "role": "Board Member",
                    "connections": [
                        "police"
                    ]
                }
            ],
            "keyProjects": [
                "3,000+ survivors served annually",
                "15,000+ nights of safe shelter",
                "300+ protective orders obtained",
                "Lethality Assessment Program (LAP) with all 5 jurisdictions",
                "Children's trauma counseling",
                "Batterer Intervention Program",
                "Economic Empowerment Program (Goodwill partnership)",
                "Prevention education (5,000 students annually)",
                "Domestic Violence Task Force coordination",
                "Court advocacy",
                "New 8,000 sq ft shelter (2019)"
            ],
            "riskFactors": "VOCA federal funding cuts threatened. Shelter often at capacity. Staff vicarious trauma. Demand exceeds capacity. Grant-dependent funding.",
            "news": "New shelter doubled capacity (2019). Local domestic homicides decreased with LAP program implementation.",
            "connections": [
                "ruw",
                "legal-aid",
                "spca",
                "micah",
                "cf"
            ],
            "founded": "40+ years",
            "capitalCampaign": "$2M+ raised for new shelter"
        },
        {
            "id": "hub-hope",
            "name": "Hub of Hope",
            "type": "food",
            "status": "moderate",
            "mission": "Fighting food insecurity by providing short-term home-delivered meals to people in crisis (veterans, seniors, children). Helping Other People Eat.",
            "budget": "~$200K (2022, estimated)",
            "leadership": [
                {
                    "name": "Deedre Stinson",
                    "role": "CEO",
                    "connections": []
                },
                {
                    "name": "Samuel Lee Hayes III",
                    "role": "Board Chairman",
                    "connections": [
                        "leashes-valor"
                    ]
                },
                {
                    "name": "Richard Falkenstein",
                    "role": "Treasurer",
                    "connections": [
                        "leashes-valor",
                        "spca"
                    ]
                },
                {
                    "name": "Fred Edwards",
                    "role": "Board Member (Chef)",
                    "connections": []
                },
                {
                    "name": "Kristen Greene",
                    "role": "Board Member",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Hope for 30 program (up to 30 days of meals)",
                "5,000+ meals served (2022)",
                "Hope Heroes Southern Kitchen caf\u00e9 (groundbreaking 2023)",
                "Home delivery to homebound individuals",
                "Focus on veterans and seniors",
                "Community cookout events",
                "Holiday meal drives (turkey dinners)",
                "Volunteer cooking marathons"
            ],
            "riskFactors": "New organization (founded ~2020). Volunteer-dependent. Caf\u00e9 venture financial risk. Small budget. Founder-centric. Need to establish revenue streams.",
            "news": "Broke ground on Hope Heroes Kitchen 2023. Partnership with Bowman Distillery. Won $10K REC Power of Change grant.",
            "connections": [
                "food-bank",
                "micah",
                "spca"
            ],
            "founded": "~2020",
            "model": "Volunteer-driven with donated ingredients"
        },
        {
            "id": "bbbs",
            "name": "Big Brothers Big Sisters Greater Fredericksburg",
            "type": "youth",
            "status": "stable",
            "mission": "Creating and supporting one-to-one mentoring relationships that ignite the power and promise of youth",
            "budget": "~$400K annually (estimated)",
            "leadership": [
                {
                    "name": "Executive Director",
                    "role": "CEO",
                    "connections": []
                }
            ],
            "keyProjects": [
                "One-to-one youth mentoring relationships",
                "Bigs in Schools program",
                "Community-based mentoring",
                "Bowl for Kids' Sake annual fundraiser",
                "Golf tournament fundraiser",
                "Santa pub crawl fundraiser",
                "Back to the 80s fundraising events",
                "Celebrity bartender events"
            ],
            "riskFactors": "Dependent on volunteer recruitment. Fundraising-dependent model. Need consistent community engagement. Volunteer retention challenges.",
            "news": "Serving Fredericksburg, Stafford, King George, Caroline, and Spotsylvania counties. Active fundraising events throughout year.",
            "connections": [
                "ruw",
                "cf"
            ],
            "founded": "Long-established",
            "served": "Youth ages 6-18"
        },
        {
            "id": "bgc-rappahannock",
            "name": "Boys & Girls Club of the Rappahannock Region",
            "type": "youth",
            "status": "stable",
            "mission": "Helping boys and girls of all backgrounds build confidence, develop character and acquire skills to become productive, responsible adults",
            "budget": "~$1M+ annually (estimated)",
            "leadership": [
                {
                    "name": "Executive Director",
                    "role": "CEO",
                    "connections": []
                }
            ],
            "keyProjects": [
                "After-school programs for 2,500+ kids annually",
                "Academic success programs",
                "Character and citizenship development",
                "Healthy lifestyles programs",
                "Summer programs",
                "Sports programs (basketball, flag football, softball)",
                "Arts & crafts",
                "Homework assistance",
                "Step team cheerleading",
                "Double-dutch jump roping"
            ],
            "riskFactors": "Facility maintenance costs. Program funding challenges. Staff recruitment/retention. Rising operational costs.",
            "news": "Renamed from Fredericksburg Regional Boys & Girls Club in 2013. Serves City of Fredericksburg and surrounding counties since 2001.",
            "connections": [
                "ruw",
                "cf"
            ],
            "founded": 2001,
            "served": "Youth from Fredericksburg, Spotsylvania, Stafford, King George, Caroline"
        },
        {
            "id": "thurman-brisben",
            "name": "Thurman Brisben Center",
            "type": "housing",
            "status": "stable",
            "mission": "Transforming homelessness and poverty at their roots through emergency shelter and wraparound services for families and individuals",
            "budget": "~$2M+ annually (estimated)",
            "leadership": [
                {
                    "name": "Executive Director",
                    "role": "CEO",
                    "connections": []
                },
                {
                    "name": "Resource Development Officer",
                    "role": "cpayton@brisbencenter.org",
                    "connections": []
                },
                {
                    "name": "Life Skills Coach",
                    "role": "Case Manager",
                    "connections": []
                },
                {
                    "name": "Shelter Coordinator Supervisor",
                    "role": "Operations",
                    "connections": []
                }
            ],
            "keyProjects": [
                "24/7/365 emergency homeless shelter",
                "Region's largest congregate shelter",
                "Separate sleeping quarters for families, single men, women",
                "Computer lab",
                "Family activity room",
                "Outdoor playground",
                "Loaner bicycles",
                "Basketball court",
                "Meditation room",
                "Clothes closet",
                "Commercial kitchen",
                "Wraparound transition programs",
                "Focus on families with children in poverty hotels"
            ],
            "riskFactors": "High operational costs. Dependent on grants and donations. Facility maintenance. Staff burnout. Complex client needs.",
            "news": "Named after founder Anna Thurman Brisben. Over 35 years serving region. Located in Battlefield Industrial Park on GO FRED bus line.",
            "connections": [
                "ruw",
                "micah",
                "cf",
                "legal-aid"
            ],
            "founded": "35+ years",
            "location": "471 Central Rd, Fredericksburg, VA"
        },
        {
            "id": "stafford-junction",
            "name": "Stafford Junction",
            "type": "youth",
            "status": "stable",
            "mission": "Providing meaningful support to those in need, focusing on education, empowerment, and healthy living for children and families in poverty",
            "budget": "~$500K annually (estimated)",
            "leadership": [
                {
                    "name": "Executive Director",
                    "role": "CEO",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Brain Builders after-school tutoring and mentoring",
                "Guided reading and math review",
                "Homework assistance",
                "Camp Junction summer program",
                "Combat summer learning loss",
                "Food assistance programs",
                "Referral services",
                "Faith-based community building"
            ],
            "riskFactors": "Dependent on volunteer tutors. Grant-dependent funding. Serving high-need population. Volunteer recruitment challenges.",
            "news": "Founded in 2002 by Stafford County Sheriff's Department. Faith-based approach to education and family support. Partners with local schools and churches.",
            "connections": [
                "ruw",
                "food-bank",
                "cf"
            ],
            "founded": 2002,
            "location": "791 Truslow Road, Fredericksburg, VA",
            "served": "Stafford County low-income families"
        },
        {
            "id": "healthy-generations",
            "name": "Healthy Generations Area Agency on Aging",
            "type": "seniors",
            "status": "stable",
            "mission": "Enhancing quality of life for older citizens by providing information and services to assist in aging in your own community and home",
            "budget": "~$3M+ annually (estimated, includes contracts)",
            "leadership": [
                {
                    "name": "Executive Director",
                    "role": "CEO",
                    "connections": []
                },
                {
                    "name": "Aiyana Olhaye",
                    "role": "Ombudsman",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Administers Older Americans Act programs",
                "Serves persons 60+ in Planning District 16",
                "VICAP - Virginia Insurance Counseling and Assistance Program",
                "Medicare counseling",
                "Long-term care ombudsman program",
                "Senior visitor programs",
                "Caregiver support services",
                "Nutrition programs",
                "Transportation assistance",
                "Multi-lingual services (English, Spanish, French, Russian, Vietnamese)"
            ],
            "riskFactors": "Federal/state funding dependent. Growing senior population increasing demand. Limited resources vs expanding need. Staff capacity challenges.",
            "news": "Serves City of Fredericksburg and Caroline, King George, Spotsylvania, Stafford counties. Strong partnerships with community organizations.",
            "connections": [
                "ruw",
                "cf",
                "micah"
            ],
            "founded": "Long-established",
            "location": "460 Lendall Lane, Fredericksburg, VA"
        },
        {
            "id": "downtown-greens",
            "name": "Downtown Greens",
            "type": "environment",
            "status": "stable",
            "mission": "Fostering community involvement and growth by protecting and nurturing urban greenspace through collaborative environmental stewardship and experiential education",
            "budget": "~$200K annually (estimated)",
            "leadership": [
                {
                    "name": "Executive Director",
                    "role": "CEO",
                    "connections": []
                }
            ],
            "keyProjects": [
                "2.8 acre urban greenspace maintenance",
                "Open to public sunrise to sunset daily",
                "Youth educational programs in sustainability",
                "Adult educational programs",
                "Urban agriculture education",
                "Soil rebuilding programs",
                "Volunteer garden hours (Thursday 3-6pm, Saturday 9am-12pm)",
                "Community volunteer opportunities",
                "UMW partnership internships"
            ],
            "riskFactors": "Volunteer-dependent operations. Limited funding sources. Weather-dependent activities. Facility maintenance needs.",
            "news": "Founded 1995 in downtown Fredericksburg. Active partnership with University of Mary Washington for internships and volunteers.",
            "connections": [
                "for",
                "cf"
            ],
            "founded": 1995,
            "location": "206 Charles St, Fredericksburg, VA (Downtown Campus)"
        },
        {
            "id": "loisanns-hope",
            "name": "Loisann's Hope House",
            "type": "housing",
            "status": "stable",
            "mission": "As the first and largest family homeless shelter, leading the region for all those experiencing a housing crisis and mitigating entry into homelessness",
            "budget": "~$1.5M+ annually (estimated)",
            "leadership": [
                {
                    "name": "Executive Director",
                    "role": "CEO",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Emergency family homeless shelter",
                "Restorative services",
                "Shelter for women, children and men",
                "Families and singles services",
                "Housing crisis intervention",
                "Prevention services",
                "Wraparound support programs",
                "Transitional housing assistance",
                "Case management"
            ],
            "riskFactors": "High demand exceeding capacity. Complex family needs. Funding challenges. Staff burnout. Rising housing costs in region.",
            "news": "Largest family homeless shelter in region. Lead agency for housing crisis response. Serves Greater Fredericksburg area.",
            "connections": [
                "ruw",
                "micah",
                "thurman-brisben",
                "legal-aid",
                "cf"
            ],
            "founded": "Long-established",
            "location": "903 Lafayette Blvd, Fredericksburg, VA"
        },
        {
            "id": "rappahannock-goodwill",
            "name": "Rappahannock Goodwill Industries",
            "type": "employment",
            "status": "stable",
            "mission": "Improving lives by mobilizing communities to provide education, employment and support services for people with barriers to opportunity",
            "budget": "~$10M+ annually (estimated, including retail operations)",
            "leadership": [
                {
                    "name": "President & CEO",
                    "role": "Chief Executive",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Workforce development programs",
                "Job training and placement",
                "Partnership with Micah (income navigation)",
                "Partnership with Empowerhouse (economic empowerment)",
                "Retail thrift store operations",
                "Donation centers",
                "Disability employment services",
                "Career counseling",
                "Skills training programs",
                "SOAR SSI application assistance (with Micah)"
            ],
            "riskFactors": "Competition from other thrift retailers. E-commerce impact on donations. Changing retail landscape. Economic downturns affect donations and sales.",
            "news": "Multiple Fredericksburg-area locations. Strong community partnerships. Active in workforce development and disability employment.",
            "connections": [
                "micah",
                "empowerhouse",
                "ruw",
                "cf"
            ],
            "founded": "Long-established",
            "model": "Social enterprise - retail supports mission programs"
        },
        {
            "id": "arc-rappahannock",
            "name": "ARC of the Rappahannock",
            "type": "disability",
            "status": "stable",
            "mission": "Providing care and support for individuals with intellectual and developmental disabilities through day programs and community services",
            "budget": "~$1M+ annually (estimated)",
            "leadership": [
                {
                    "name": "Executive Director",
                    "role": "CEO",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Daybreak day program for ages 2+",
                "Care for individuals with intellectual disabilities",
                "Care for developmental disabilities",
                "Saturday programs 2:00-5:00 pm",
                "Volunteer opportunities for youth 17+",
                "Community integration programs",
                "Family support services",
                "Recreational activities",
                "Life skills development"
            ],
            "riskFactors": "Medicaid/state funding dependent. Staff recruitment/retention challenges. Specialized care requirements. Rising care costs.",
            "news": "Serving Rappahannock region for decades. Active volunteer program. Saturday care programs provide respite for families.",
            "connections": [
                "ruw",
                "cf",
                "healthy-generations"
            ],
            "founded": "Long-established",
            "served": "Individuals with intellectual and developmental disabilities"
        },
        {
            "id": "mental-health-america-fred",
            "name": "Mental Health America Fredericksburg",
            "type": "healthcare",
            "status": "stable",
            "mission": "Promoting mental health and wellness through community education, support services, and senior visitor programs",
            "budget": "~$300K annually (estimated)",
            "leadership": [
                {
                    "name": "Executive Director",
                    "role": "CEO",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Senior Visitors Program",
                "Social connection for seniors via phone/computer",
                "Note and card sending programs",
                "Doorstep item drop-offs for isolated seniors",
                "Mental health education",
                "Community outreach programs",
                "Support group facilitation",
                "Mental health awareness campaigns",
                "Volunteer coordination"
            ],
            "riskFactors": "Volunteer-dependent programs. Limited funding for mental health services. Growing need post-pandemic. Staff capacity challenges.",
            "news": "Active Senior Visitors Program addressing isolation. Strong volunteer engagement. Partnerships with other senior-serving organizations.",
            "connections": [
                "healthy-generations",
                "ruw",
                "cf"
            ],
            "founded": "Long-established",
            "focus": "Mental health education and senior isolation prevention"
        },
        {
            "id": "central-rapp-library",
            "name": "Central Rappahannock Regional Library",
            "type": "education",
            "status": "stable",
            "mission": "Providing library services, educational programs, and community resources to residents of the Rappahannock region",
            "budget": "~$8M+ annually (regional library system)",
            "leadership": [
                {
                    "name": "Library Director",
                    "role": "Executive Leadership",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Multi-branch library system",
                "Youth educational programs",
                "Summer reading programs",
                "Children's literacy programs",
                "Digital literacy training",
                "Community meeting spaces",
                "Partnership with Thurman Brisben Center",
                "Mobile library services",
                "Job search assistance",
                "Technology access for underserved",
                "Cultural programming"
            ],
            "riskFactors": "Public funding dependent. Changing technology landscape. Facilities aging. Growing demand for digital services.",
            "news": "Regional system serving multiple localities. Active partnerships with schools and nonprofits. Strong youth programming.",
            "connections": [
                "thurman-brisben",
                "ruw",
                "stafford-junction",
                "cf"
            ],
            "founded": "Long-established regional system",
            "served": "Fredericksburg and surrounding counties"
        },
        {
            "id": "red-cross-rappahannock",
            "name": "Rappahannock Area Chapter American Red Cross",
            "type": "emergency",
            "status": "stable",
            "mission": "Providing relief to victims of disasters, emergency assistance, blood donation services, and community preparedness training",
            "budget": "~$1M+ annually (estimated)",
            "leadership": [
                {
                    "name": "Executive Director",
                    "role": "CEO",
                    "connections": []
                }
            ],
            "keyProjects": [
                "Disaster response and relief",
                "Emergency family assistance",
                "Blood donation drives",
                "CPR and first aid training",
                "Youth team (ages 12-18)",
                "Volunteer emergency services",
                "Home fire preparedness campaign",
                "Disaster preparedness education",
                "Military family support services",
                "Health and safety training"
            ],
            "riskFactors": "Disaster unpredictability. Volunteer recruitment. National org funding allocation. Competition for blood donations.",
            "news": "Youth team meets Wednesdays 6:30-7:30pm. Volunteers 16+ welcome. Active disaster response in region. Partnership with Gwyneth's Gift on emergency preparedness.",
            "connections": [
                "gwyneth-gift",
                "ruw",
                "cf"
            ],
            "founded": "Long-established chapter",
            "phone": "(540) 373-9807"
        }
    ],
    "keyPeople": [
        {
            "id": "molly-flurry",
            "name": "Molly Flurry",
            "organizations": [
                "spca",
                "habitat",
                "for",
                "food-bank"
            ],
            "role": "Attorney and multi-board volunteer (4 boards)",
            "description": "Most connected individual in non-profit network. Brings legal expertise and bridges animal welfare, housing, environment, and food security sectors."
        },
        {
            "id": "sarah-walsh",
            "name": "Sarah Walsh",
            "organizations": [
                "ruw",
                "spca",
                "food-bank"
            ],
            "role": "RUW Chief Impact Officer (3 boards)",
            "description": "Key connector between philanthropic coordination and direct service organizations. Professional nonprofit leadership expertise."
        },
        {
            "id": "joel-griffin",
            "name": "Joel Griffin",
            "organizations": [
                "gwyneth-gift",
                "legal-aid"
            ],
            "role": "Entrepreneur, philanthropist, and co-founder (2 boards)",
            "description": "Well-known local entrepreneur whose personal tragedy led to founding Gwyneth's Gift. Bridges healthcare and legal sectors."
        },
        {
            "id": "fred-rankin",
            "name": "Fred Rankin",
            "organizations": [
                "micah",
                "mwhc",
                "for"
            ],
            "role": "Retired Mary Washington Healthcare CEO (3 connections)",
            "description": "Former hospital CEO leveraging healthcare expertise to support homeless services and environmental protection. Vocal advocate for multiple causes."
        },
        {
            "id": "george-barnick",
            "name": "George Barnick",
            "organizations": [
                "spca",
                "food-bank"
            ],
            "role": "Technology entrepreneur (2 boards)",
            "description": "Local tech business owner bringing IT skills and business acumen to animal welfare and hunger relief efforts."
        },
        {
            "id": "regis-keddie",
            "name": "Regis Keddie",
            "organizations": [
                "micah",
                "for"
            ],
            "role": "Financial advisor (2 boards)",
            "description": "Davenport financial advisor connecting homeless services with environmental advocacy. Brings financial expertise to both boards."
        },
        {
            "id": "hayes-samuel",
            "name": "Samuel Lee Hayes III",
            "organizations": [
                "leashes-valor",
                "hub-hope"
            ],
            "role": "Retired Marine Corps officer, community volunteer (2 boards)",
            "description": "Veteran leader connecting service dog programs with meal delivery initiatives. Active in Masonic Lodge and veteran networks."
        },
        {
            "id": "falkenstein",
            "name": "Richard Falkenstein",
            "organizations": [
                "leashes-valor",
                "hub-hope",
                "spca"
            ],
            "role": "Business leader, Chamber member (3 boards)",
            "description": "Bridges business community with veteran services, food security, and animal welfare. Chamber of Commerce connection facilitates corporate engagement."
        },
        {
            "id": "meghann-cotter",
            "name": "Meghann Cotter",
            "organizations": [
                "micah"
            ],
            "role": "Executive Director of Micah Ecumenical Ministries",
            "description": "Fredericksburg native with Master's in Urban Studies. Led Micah since 2007, transforming it into Housing First model. Opus Prize finalist 2025."
        },
        {
            "id": "ann-kloeckner",
            "name": "Ann H. Kloeckner",
            "organizations": [
                "legal-aid"
            ],
            "role": "Executive Director of Legal Aid Works",
            "description": "Former journalist-turned-attorney. Leading Legal Aid Works since 2007. Highly respected in regional social service collaborations."
        },
        {
            "id": "dan-maher",
            "name": "Dan Maher",
            "organizations": [
                "food-bank"
            ],
            "role": "President & CEO of Fredericksburg Regional Food Bank",
            "description": "Leading FRFB since 2019 with focus on innovative hunger relief programs and policy advocacy. Regularly briefs lawmakers on food security issues."
        },
        {
            "id": "jayne-johnson",
            "name": "Jayne Johnson",
            "organizations": [
                "habitat"
            ],
            "role": "Executive Director of Central Rappahannock Habitat for Humanity",
            "description": "Nearly 20 years of Habitat experience. Leading expansion of affordable homeownership pathways and overseeing major developments in Caroline County."
        },
        {
            "id": "daria-christian",
            "name": "Daria Christian",
            "organizations": [
                "for"
            ],
            "role": "Executive Director of Friends of the Rappahannock",
            "description": "Succeeded long-time director in 2023. Leading 34-person staff in watershed protection, restoration, and education. Overseeing 40th anniversary expansion."
        },
        {
            "id": "laurie-webb",
            "name": "Laurie Webb",
            "organizations": [
                "spca"
            ],
            "role": "Executive Director of Fredericksburg SPCA",
            "description": "Hired 2019. Led transition to no-kill model and opened low-cost Community Medical Center. Expanding outreach and pet retention programs."
        },
        {
            "id": "jason-haag",
            "name": "Jason Haag",
            "organizations": [
                "leashes-valor"
            ],
            "role": "CEO & Founder of Leashes of Valor",
            "description": "Retired Marine Corps Captain. Founded organization in 2017 after his service dog saved his life from PTSD. Featured in 50+ media outlets."
        },
        {
            "id": "janel-donohue",
            "name": "Janel S. Donohue",
            "organizations": [
                "ruw"
            ],
            "role": "President/CEO of Rappahannock United Way",
            "description": "Long-time leader of RUW overseeing strategy and daily operations. Works closely with county governments on community planning."
        },
        {
            "id": "kathy-anderson",
            "name": "Kathy Anderson",
            "organizations": [
                "empowerhouse"
            ],
            "role": "Executive Director of Empowerhouse",
            "description": "30 years leading Empowerhouse with deep expertise in domestic violence services. Oversees shelter, counseling, advocacy, and prevention programs."
        },
        {
            "id": "teri-mcnally",
            "name": "Teri McNally",
            "organizations": [
                "cf"
            ],
            "role": "Founding CEO of Community Foundation (Retired)",
            "description": "Led Community Foundation for 23 years (1997-2020), growing it from under $1M to $60M in assets. Synonymous with local philanthropy."
        },
        {
            "id": "keith-wampler",
            "name": "Keith Wampler",
            "organizations": [
                "ruw",
                "food-bank"
            ],
            "role": "CPA and board member (2 boards)",
            "description": "PBMares CPA bringing financial expertise to United Way and Food Bank. Helps engage business community in giving."
        },
        {
            "id": "susan-coleman",
            "name": "Susan Coleman",
            "organizations": [
                "ruw",
                "food-bank"
            ],
            "role": "Community volunteer (2 boards)",
            "description": "Active in RUW committees and Food Bank board. Facilitates collaborative efforts between organizations."
        },
        {
            "id": "mark-steele",
            "name": "Mark Steele",
            "organizations": [
                "spca"
            ],
            "role": "SPCA Board Member, Former MWHC CFO",
            "description": "Former interim CEO of Mary Washington Healthcare. Lends strategic and financial acumen to SPCA operations."
        },
        {
            "id": "deedre-stinson",
            "name": "Deedre Stinson",
            "organizations": [
                "hub-hope",
                "leashes-valor"
            ],
            "role": "CEO of Hub of Hope, Leashes of Valor Board",
            "description": "Community activist passionate about feeding the hungry. Connects meal delivery with veteran services through board service."
        },
        {
            "id": "bbbs-director",
            "name": "BBBS Executive Director",
            "organizations": [
                "bbbs"
            ],
            "role": "Executive Director of Big Brothers Big Sisters",
            "description": "Leading youth mentoring programs serving 5-county region. Coordinates Bowl for Kids' Sake and other major fundraising events."
        },
        {
            "id": "bgc-director",
            "name": "BGC Executive Director",
            "organizations": [
                "bgc-rappahannock"
            ],
            "role": "CEO of Boys & Girls Club of Rappahannock Region",
            "description": "Overseeing programs for 2,500+ youth annually. Former Fredericksburg Regional Boys & Girls Club, renamed in 2013."
        },
        {
            "id": "brisben-director",
            "name": "Thurman Brisben Executive Director",
            "organizations": [
                "thurman-brisben"
            ],
            "role": "CEO of Thurman Brisben Center",
            "description": "Leading region's largest emergency homeless shelter. 35+ years of service. Managing 24/7/365 operations and wraparound services."
        },
        {
            "id": "stafford-junction-director",
            "name": "Stafford Junction Director",
            "organizations": [
                "stafford-junction"
            ],
            "role": "Executive Director of Stafford Junction",
            "description": "Faith-based nonprofit leader focused on education and empowerment for low-income Stafford County families since 2002."
        },
        {
            "id": "healthy-gen-director",
            "name": "Healthy Generations Director",
            "organizations": [
                "healthy-generations"
            ],
            "role": "Executive Director of Healthy Generations AAA",
            "description": "Administering Older Americans Act programs for Planning District 16. Serving seniors across 5 jurisdictions."
        },
        {
            "id": "loisanns-director",
            "name": "Loisann's Hope House Director",
            "organizations": [
                "loisanns-hope"
            ],
            "role": "Executive Director of Loisann's Hope House",
            "description": "Leading region's largest family homeless shelter. Pioneering housing crisis intervention and prevention services."
        },
        {
            "id": "goodwill-president",
            "name": "Rappahannock Goodwill CEO",
            "organizations": [
                "rappahannock-goodwill"
            ],
            "role": "President & CEO of Rappahannock Goodwill",
            "description": "Leading workforce development and employment services through social enterprise model. Key partner with Micah and Empowerhouse."
        }
    ],
    "metadata": {
        "totalOrganizations": 25,
        "totalKeyPeople": 29,
        "sectors": {
            "healthcare": 3,
            "philanthropy": 2,
            "housing": 4,
            "food": 2,
            "legal": 2,
            "environment": 2,
            "animal": 1,
            "veterans": 1,
            "youth": 3,
            "seniors": 1,
            "employment": 1,
            "disability": 1,
            "education": 1,
            "emergency": 1
        },
        "riskLevels": {
            "defunct": 1,
            "stable": 20,
            "moderate": 4
        },
        "totalBudget": "~$100M+ (including in-kind donations)",
        "sourceDocument": "nonprofits.pdf - Significance of Fredericksburg's Non-Profit Sector",
        "dataDate": "2025",
        "region": "Fredericksburg, Virginia and Planning District 16"
    }
};

// ========== GLOBAL STATE ==========
let canvas, ctx;
let nodes = [];
let edges = [];
let selectedNode = null;
let hoveredNode = null;
let isDragging = false;
let dragNode = null;
let viewOffset = { x: 0, y: 0 };
let scale = 1;
let labelsVisible = true;
let currentViewMode = 'network';
let filters = {
    sector: 'all',
    status: 'all'
};

// Canvas interaction state
let lastMousePos = { x: 0, y: 0 };
let isPanning = false;
let panStart = { x: 0, y: 0 };

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing FXBG Nonprofit Network Platform...');
    
    canvas = document.getElementById('networkCanvas');
    ctx = canvas.getContext('2d');
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    initializeNetwork();
    setupEventListeners();
    updateStats();
    
    // Start animation loop
    animate();
    
    console.log('Platform initialized successfully');
});

function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
}

// ========== NETWORK INITIALIZATION ==========
function initializeNetwork() {
    nodes = [];
    edges = [];
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.35;
    
    // Create organization nodes
    nonprofitData.organizations.forEach((org, index) => {
        const angle = (index / nonprofitData.organizations.length) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        nodes.push({
            id: org.id,
            type: 'organization',
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            data: org,
            radius: getNodeRadius(org),
            color: getStatusColor(org.status)
        });
    });
    
    // Create edges based on connections
    nonprofitData.organizations.forEach(org => {
        if (org.connections && org.connections.length > 0) {
            org.connections.forEach(targetId => {
                const sourceNode = nodes.find(n => n.id === org.id);
                const targetNode = nodes.find(n => n.id === targetId);
                
                if (sourceNode && targetNode) {
                    edges.push({
                        source: sourceNode,
                        target: targetNode,
                        strength: 1
                    });
                }
            });
        }
    });
    
    // Add key people nodes if in people view
    if (currentViewMode === 'people') {
        addPeopleNodes();
    }
}

function addPeopleNodes() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const innerRadius = Math.min(canvas.width, canvas.height) * 0.15;
    
    nonprofitData.keyPeople.forEach((person, index) => {
        const angle = (index / nonprofitData.keyPeople.length) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * innerRadius;
        const y = centerY + Math.sin(angle) * innerRadius;
        
        nodes.push({
            id: person.id,
            type: 'person',
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            data: person,
            radius: 25,
            color: '#ff6b00'
        });
        
        // Create edges to connected organizations
        person.organizations.forEach(orgId => {
            const targetNode = nodes.find(n => n.id === orgId && n.type === 'organization');
            const personNode = nodes.find(n => n.id === person.id);
            
            if (personNode && targetNode) {
                edges.push({
                    source: personNode,
                    target: targetNode,
                    strength: 0.5,
                    type: 'person-org'
                });
            }
        });
    });
}

function getNodeRadius(org) {
    // Size nodes based on budget
    const budgetStr = org.budget || '';
    const match = budgetStr.match(/\$?(\d+\.?\d*)/);
    
    if (match) {
        const value = parseFloat(match[1]);
        if (budgetStr.includes('M')) {
            return Math.min(50, Math.max(20, value * 5));
        }
        return Math.min(40, Math.max(15, value / 50));
    }
    
    return 25;
}

function getStatusColor(status) {
    const colors = {
        'stable': '#00ff88',
        'moderate': '#ffaa00',
        'high': '#ff4444',
        'defunct': '#666666'
    };
    return colors[status] || '#00d9ff';
}

// ========== PHYSICS SIMULATION ==========
function updatePhysics() {
    // Apply forces
    const damping = 0.85;
    const centerForce = 0.001;
    const repelForce = 1500;
    const linkForce = 0.01;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Node-node repulsion
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[j].x - nodes[i].x;
            const dy = nodes[j].y - nodes[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy) + 1;
            const force = repelForce / (dist * dist);
            
            nodes[i].vx -= (dx / dist) * force;
            nodes[i].vy -= (dy / dist) * force;
            nodes[j].vx += (dx / dist) * force;
            nodes[j].vy += (dy / dist) * force;
        }
    }
    
    // Link forces
    edges.forEach(edge => {
        const dx = edge.target.x - edge.source.x;
        const dy = edge.target.y - edge.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = (dist - 200) * linkForce * edge.strength;
        
        edge.source.vx += (dx / dist) * force;
        edge.source.vy += (dy / dist) * force;
        edge.target.vx -= (dx / dist) * force;
        edge.target.vy -= (dy / dist) * force;
    });
    
    // Center attraction
    nodes.forEach(node => {
        if (node !== dragNode) {
            const dx = centerX - node.x;
            const dy = centerY - node.y;
            node.vx += dx * centerForce;
            node.vy += dy * centerForce;
        }
    });
    
    // Update positions
    nodes.forEach(node => {
        if (node !== dragNode) {
            node.vx *= damping;
            node.vy *= damping;
            node.x += node.vx;
            node.y += node.vy;
            
            // Boundary constraints
            const margin = node.radius;
            node.x = Math.max(margin, Math.min(canvas.width - margin, node.x));
            node.y = Math.max(margin, Math.min(canvas.height - margin, node.y));
        }
    });
}

// ========== RENDERING ==========
function render() {
    // Clear canvas
    ctx.fillStyle = '#0a0e1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Apply transformations
    ctx.save();
    ctx.translate(viewOffset.x, viewOffset.y);
    ctx.scale(scale, scale);
    
    // Draw edges
    edges.forEach(edge => {
        if (shouldDrawEdge(edge)) {
            drawEdge(edge);
        }
    });
    
    // Draw nodes
    nodes.forEach(node => {
        if (shouldDrawNode(node)) {
            drawNode(node);
        }
    });
    
    ctx.restore();
}

function shouldDrawNode(node) {
    if (filters.sector !== 'all' && node.type === 'organization') {
        return node.data.type === filters.sector;
    }
    if (filters.status !== 'all' && node.type === 'organization') {
        return node.data.status === filters.status;
    }
    return true;
}

function shouldDrawEdge(edge) {
    return shouldDrawNode(edge.source) && shouldDrawNode(edge.target);
}

function drawEdge(edge) {
    const isHighlighted = selectedNode && 
        (edge.source === selectedNode || edge.target === selectedNode);
    
    ctx.beginPath();
    ctx.moveTo(edge.source.x, edge.source.y);
    ctx.lineTo(edge.target.x, edge.target.y);
    
    if (isHighlighted) {
        ctx.strokeStyle = '#ff6b00';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.8;
    } else {
        ctx.strokeStyle = edge.type === 'person-org' ? '#00d9ff' : '#00d9ff';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.2;
    }
    
    ctx.stroke();
    ctx.globalAlpha = 1;
}

function drawNode(node) {
    const isSelected = node === selectedNode;
    const isHovered = node === hoveredNode;
    
    // Glow effect for selected/hovered
    if (isSelected || isHovered) {
        ctx.shadowBlur = 20;
        ctx.shadowColor = isSelected ? '#ff6b00' : '#00d9ff';
    }
    
    // Draw node circle
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    
    if (node.type === 'organization') {
        ctx.fillStyle = node.color + (isSelected ? 'ff' : 'aa');
        ctx.fill();
        ctx.strokeStyle = '#00d9ff';
        ctx.lineWidth = isSelected ? 3 : 1;
        ctx.stroke();
    } else {
        // Person node
        ctx.fillStyle = '#ff6b00' + (isSelected ? 'ff' : 'aa');
        ctx.fill();
        ctx.strokeStyle = '#00d9ff';
        ctx.lineWidth = isSelected ? 3 : 1;
        ctx.stroke();
    }
    
    ctx.shadowBlur = 0;
    
    // Draw icon
    ctx.fillStyle = '#0a0e1a';
    ctx.font = `${node.radius * 0.6}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(node.type === 'organization' ? '⬢' : '👤', node.x, node.y);
    
    // Draw label
    if (labelsVisible && (isSelected || isHovered || node.radius > 25)) {
        ctx.font = '11px Segoe UI';
        ctx.fillStyle = '#00d9ff';
        ctx.textAlign = 'center';
        
        const name = node.type === 'organization' ? 
            node.data.name : node.data.name;
        const maxWidth = 150;
        const text = truncateText(ctx, name, maxWidth);
        
        ctx.fillText(text, node.x, node.y + node.radius + 15);
    }
}

function truncateText(ctx, text, maxWidth) {
    if (ctx.measureText(text).width <= maxWidth) {
        return text;
    }
    
    let truncated = text;
    while (ctx.measureText(truncated + '...').width > maxWidth && truncated.length > 0) {
        truncated = truncated.slice(0, -1);
    }
    return truncated + '...';
}

// ========== ANIMATION LOOP ==========
function animate() {
    updatePhysics();
    render();
    requestAnimationFrame(animate);
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Canvas interactions
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('wheel', handleWheel);
    canvas.addEventListener('click', handleClick);
    
    // Touch events for mobile
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    
    // Control buttons
    document.getElementById('sectorFilter').addEventListener('change', (e) => {
        filters.sector = e.target.value;
        updateStats();
    });
    
    document.getElementById('statusFilter').addEventListener('change', (e) => {
        filters.status = e.target.value;
        updateStats();
    });
    
    document.getElementById('viewMode').addEventListener('change', (e) => {
        currentViewMode = e.target.value;
        initializeNetwork();
    });
    
    document.getElementById('resetView').addEventListener('click', () => {
        viewOffset = { x: 0, y: 0 };
        scale = 1;
        initializeNetwork();
    });
    
    document.getElementById('toggleLabels').addEventListener('click', () => {
        labelsVisible = !labelsVisible;
    });
    
    document.getElementById('exportData').addEventListener('click', exportData);
    
    document.getElementById('closePanel').addEventListener('click', () => {
        document.getElementById('infoPanel').classList.remove('active');
        selectedNode = null;
    });
    
    document.getElementById('closePersonPanel').addEventListener('click', () => {
        document.getElementById('personPanel').classList.remove('active');
    });
    
    document.getElementById('toggleStats').addEventListener('click', () => {
        const content = document.getElementById('statsContent');
        const btn = document.getElementById('toggleStats');
        content.classList.toggle('collapsed');
        btn.textContent = content.classList.contains('collapsed') ? '+' : '−';
    });
    
    document.getElementById('analyzeBtn').addEventListener('click', analyzePerson);
}

function handleMouseDown(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - viewOffset.x) / scale;
    const y = (e.clientY - rect.top - viewOffset.y) / scale;
    
    const clickedNode = getNodeAt(x, y);
    
    if (clickedNode) {
        isDragging = true;
        dragNode = clickedNode;
    } else {
        isPanning = true;
        panStart = { x: e.clientX, y: e.clientY };
    }
    
    lastMousePos = { x: e.clientX, y: e.clientY };
}

function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - viewOffset.x) / scale;
    const y = (e.clientY - rect.top - viewOffset.y) / scale;
    
    if (isDragging && dragNode) {
        dragNode.x = x;
        dragNode.y = y;
        dragNode.vx = 0;
        dragNode.vy = 0;
    } else if (isPanning) {
        viewOffset.x += e.clientX - lastMousePos.x;
        viewOffset.y += e.clientY - lastMousePos.y;
    } else {
        hoveredNode = getNodeAt(x, y);
        canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
    }
    
    lastMousePos = { x: e.clientX, y: e.clientY };
}

function handleMouseUp(e) {
    isDragging = false;
    dragNode = null;
    isPanning = false;
    canvas.style.cursor = 'grab';
}

function handleWheel(e) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    scale = Math.max(0.5, Math.min(3, scale * delta));
}

function handleClick(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left - viewOffset.x) / scale;
    const y = (e.clientY - rect.top - viewOffset.y) / scale;
    
    const clickedNode = getNodeAt(x, y);
    
    if (clickedNode) {
        selectedNode = clickedNode;
        showInfoPanel(clickedNode);
    }
}

function handleTouchStart(e) {
    if (e.touches.length === 1) {
        const touch = e.touches[0];
        handleMouseDown({ clientX: touch.clientX, clientY: touch.clientY });
    }
}

function handleTouchMove(e) {
    if (e.touches.length === 1) {
        const touch = e.touches[0];
        handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
    }
}

function handleTouchEnd(e) {
    handleMouseUp(e);
}

function getNodeAt(x, y) {
    for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i];
        const dx = x - node.x;
        const dy = y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist <= node.radius) {
            return node;
        }
    }
    return null;
}

// ========== INFO PANEL ==========
function showInfoPanel(node) {
    const panel = document.getElementById('infoPanel');
    const title = document.getElementById('panelTitle');
    const content = document.getElementById('panelContent');
    
    if (node.type === 'organization') {
        const org = node.data;
        title.textContent = org.name;
        
        let html = `
            <div class="info-section fade-in">
                <h3>Status</h3>
                <span class="status-badge status-${org.status}">${org.status.toUpperCase()}</span>
                <p><strong>Type:</strong> ${org.type.charAt(0).toUpperCase() + org.type.slice(1)}</p>
                ${org.founded ? `<p><strong>Founded:</strong> ${org.founded}</p>` : ''}
            </div>
            
            <div class="info-section fade-in">
                <h3>Mission</h3>
                <p>${org.mission}</p>
            </div>
            
            <div class="info-section fade-in">
                <h3>Financial Overview</h3>
                <p><strong>Budget:</strong> ${org.budget || 'N/A'}</p>
                ${org.expenses ? `<p><strong>Expenses:</strong> ${org.expenses}</p>` : ''}
                ${org.netAssets ? `<p><strong>Net Assets:</strong> ${org.netAssets}</p>` : ''}
                ${org.employees ? `<p><strong>Staff:</strong> ${org.employees}</p>` : ''}
            </div>
            
            <div class="info-section fade-in">
                <h3>Leadership & Board</h3>
        `;
        
        org.leadership.forEach(leader => {
            html += `
                <div class="leader-card">
                    <div class="leader-name">${leader.name}</div>
                    <div class="leader-role">${leader.role}</div>
                </div>
            `;
        });
        
        html += '</div>';
        
        if (org.keyProjects && org.keyProjects.length > 0) {
            html += `
                <div class="info-section fade-in">
                    <h3>Key Projects & Services</h3>
                    <ul>
            `;
            org.keyProjects.forEach(project => {
                html += `<li>${project}</li>`;
            });
            html += '</ul></div>';
        }
        
        html += `
            <div class="info-section fade-in">
                <h3>Risk Assessment</h3>
                <p>${org.riskFactors}</p>
            </div>
            
            <div class="info-section fade-in">
                <h3>Recent News</h3>
                <p>${org.news}</p>
            </div>
        `;
        
        if (org.connections && org.connections.length > 0) {
            html += `
                <div class="info-section fade-in">
                    <h3>Network Connections</h3>
                    <p>${org.connections.length} organizational connections</p>
            `;
            org.connections.forEach(connId => {
                const connOrg = nonprofitData.organizations.find(o => o.id === connId);
                if (connOrg) {
                    html += `<span class="connection-link" onclick="selectOrgById('${connId}')">${connOrg.name}</span>`;
                }
            });
            html += '</div>';
        }
        
        content.innerHTML = html;
        panel.classList.add('active');
    } else if (node.type === 'person') {
        showPersonPanel(node.data);
    }
}

function showPersonPanel(person) {
    const panel = document.getElementById('personPanel');
    const title = document.getElementById('personPanelTitle');
    const content = document.getElementById('personPanelContent');
    
    title.textContent = person.name;
    
    let html = `
        <div class="info-section fade-in">
            <h3>Profile</h3>
            <p><strong>Role:</strong> ${person.role}</p>
            <p><strong>Board Positions:</strong> ${person.organizations.length}</p>
        </div>
        
        <div class="info-section fade-in">
            <h3>Description</h3>
            <p>${person.description}</p>
        </div>
        
        <div class="info-section fade-in">
            <h3>Affiliated Organizations</h3>
    `;
    
    person.organizations.forEach(orgId => {
        const org = nonprofitData.organizations.find(o => o.id === orgId);
        if (org) {
            html += `<span class="connection-link" onclick="selectOrgById('${orgId}')">${org.name}</span>`;
        }
    });
    
    html += '</div>';
    
    content.innerHTML = html;
    panel.classList.add('active');
}

function selectOrgById(orgId) {
    const node = nodes.find(n => n.id === orgId);
    if (node) {
        selectedNode = node;
        showInfoPanel(node);
        
        // Center on node
        viewOffset.x = canvas.width / 2 - node.x * scale;
        viewOffset.y = canvas.height / 2 - node.y * scale;
    }
}

// ========== STATISTICS ==========
function updateStats() {
    const visibleOrgs = nodes.filter(n => n.type === 'organization' && shouldDrawNode(n));
    const activeOrgs = visibleOrgs.filter(n => n.data.status !== 'defunct');
    
    document.getElementById('orgCount').textContent = visibleOrgs.length;
    document.getElementById('activeCount').textContent = activeOrgs.length;
}

// ========== CONNECTION ANALYZER ==========
function analyzePerson() {
    const searchTerm = document.getElementById('personSearch').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('analyzerResults');
    
    if (!searchTerm) {
        resultsDiv.innerHTML = '<p class="placeholder">Enter a name to analyze connections</p>';
        return;
    }
    
    const matches = nonprofitData.keyPeople.filter(p => 
        p.name.toLowerCase().includes(searchTerm)
    );
    
    if (matches.length === 0) {
        resultsDiv.innerHTML = '<p class="placeholder">No matches found</p>';
        return;
    }
    
    let html = '';
    matches.forEach(person => {
        html += `
            <div class="leader-card fade-in" style="margin-bottom: 15px;">
                <div class="leader-name">${person.name}</div>
                <div class="leader-role">${person.role}</div>
                <p style="font-size: 0.75em; color: #66b3cc; margin-top: 8px;">
                    ${person.description}
                </p>
                <div style="margin-top: 10px;">
        `;
        
        person.organizations.forEach(orgId => {
            const org = nonprofitData.organizations.find(o => o.id === orgId);
            if (org) {
                html += `<span class="connection-link" onclick="selectOrgById('${orgId}')">${org.name}</span>`;
            }
        });
        
        html += '</div></div>';
    });
    
    resultsDiv.innerHTML = html;
}

// ========== EXPORT DATA ==========
function exportData() {
    const exportData = {
        timestamp: new Date().toISOString(),
        filters: filters,
        viewMode: currentViewMode,
        statistics: {
            totalOrganizations: nonprofitData.organizations.length,
            keyPeople: nonprofitData.keyPeople.length,
            connections: edges.length
        },
        organizations: nonprofitData.organizations,
        keyPeople: nonprofitData.keyPeople
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `fxbg-nonprofit-network-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    console.log('Data exported successfully');
}

// ========== UTILITY FUNCTIONS ==========
console.log('FXBG Nonprofit Network Intelligence Platform - Loaded');
