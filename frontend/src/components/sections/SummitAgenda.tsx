'use client';
import React, { useEffect } from 'react';

export default function SummitAgenda() {
    useEffect(() => {
        const tabs = Array.from(document.querySelectorAll('.summitAgendaTab')) as HTMLElement[];
        const panels = Array.from(document.querySelectorAll('.summitAgendaPanel')) as HTMLElement[];
        const tabsContainer = document.querySelector('.summitAgendaTabs') as HTMLElement | null;

        function centerTab(tab: HTMLElement) {
            if (!tabsContainer || window.innerWidth > 767) return;
            const containerRect = tabsContainer.getBoundingClientRect();
            const tabRect = tab.getBoundingClientRect();
            const scrollLeft = tabsContainer.scrollLeft
                + (tabRect.left - containerRect.left)
                - (containerRect.width / 2)
                + (tabRect.width / 2);
            tabsContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }

        function activate(tabId: string | null, clickedTab?: HTMLElement) {
            tabs.forEach(t => {
                const isActive = t.getAttribute('data-agenda-tab') === tabId;
                t.classList.toggle('active', isActive);
                t.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });
            panels.forEach(p => {
                const isActive = p.getAttribute('data-agenda-panel') === tabId;
                p.classList.toggle('active', isActive);
                if (isActive) p.removeAttribute('hidden');
                else p.setAttribute('hidden', '');
            });
            if (clickedTab) centerTab(clickedTab);
        }

        const handlers: [HTMLElement, EventListener][] = [];
        tabs.forEach(t => {
            const handler = () => activate(t.getAttribute('data-agenda-tab'), t);
            t.addEventListener('click', handler);
            handlers.push([t, handler]);
        });

        const activeTab = tabsContainer?.querySelector('.summitAgendaTab.active') as HTMLElement | null;
        if (activeTab) setTimeout(() => centerTab(activeTab), 100);

        return () => {
            handlers.forEach(([el, h]) => el.removeEventListener('click', h));
        };
    }, []);

    return (
        <section className="summitAgenda mob-hide">
            <div className="container">
                <div className="summitAgendaWrapper">
                    <h2 className="summitAgendaHeading nkBold">SUMMIT AGENDA</h2>
        
                    <div className="summitAgendaList hide">
                        <div className="summitAgendaRow">
                            <div className="summitAgendaTime">
                                <p className="timeText">08:00 IST</p>
                            </div>
        
                            <div className="summitAgendaContent">
                                <p className="summitAgendaTitle nkMedium">Welcome and Registration</p>
                            </div>
        
                            <div className="summitAgendaAction">
                                <a className="summitAgendaBookBtn nkBold">Book Your
                                    Slot</a>
                            </div>
                        </div>
        
                        <div className="summitAgendaRow">
                            <div className="summitAgendaTime">
                                <p className="timeText">09:00 IST</p>
                            </div>
        
                            <div className="summitAgendaContent">
                                <p className="summitAgendaTitle nkMedium">Networking over Breakfast</p>
                            </div>
        
                            <div className="summitAgendaAction">
                                <a className="summitAgendaBookBtn nkBold">Book Your
                                    Slot</a>
                            </div>
                        </div>
        
                        <div className="summitAgendaRow">
                            <div className="summitAgendaTime">
                                <p className="timeText">10:00 IST</p>
                            </div>
        
                            <div className="summitAgendaContent">
                                <p className="summitAgendaTitle nkMedium">Grand Opening by the Founder</p>
                            </div>
        
                            <div className="summitAgendaAction">
                                <a className="summitAgendaBookBtn nkBold">Book Your
                                    Slot</a>
                            </div>
                        </div>
        
                        <div className="summitAgendaRow">
                            <div className="summitAgendaTime">
                                <p className="timeText">10:15 IST</p>
                            </div>
        
                            <div className="summitAgendaContent">
                                <p className="summitAgendaTitle nkMedium">Keynote Chat with Guest </p>
                            </div>
        
                            <div className="summitAgendaAction">
                                <a className="summitAgendaBookBtn nkBold">Book Your
                                    Slot</a>
                            </div>
                        </div>
                    </div>
        
                    <div className="summitListBelow">
        
                        <ul className="summitAgendaTabs" role="tablist" aria-label="Summit agenda tracks">
                            <li className="summitAgendaTab active"  data-agenda-tab="fireside" role="tab" aria-selected={true}>Fireside Chat </li>
        
                            <li className="summitAgendaTab" data-agenda-tab="Keynotes" role="tab" aria-selected={false}>Panels
                            </li>
        
                            <li className="summitAgendaTab" data-agenda-tab="labs" role="tab" aria-selected={false}>Hands-on
                                labs
                            </li>
        
                            <li className="summitAgendaTab" data-agenda-tab="CofounderRoundtable" role="tab" aria-selected={false}>
                                Co-founder Mixer
                            </li>
                            <li className="summitAgendaTab" data-agenda-tab="SharkTank" role="tab" aria-selected={false}>Shark
                                Tank Pitches
                            </li>
        
                            <li className="summitAgendaTab" data-agenda-tab="FilmmakingHackathon" role="tab" aria-selected={false}>
                                Filmmaking Hackathon</li>
        
        
                        </ul>
        
                        <div className="summitAgendaPanels panel summitFounderFirst">
                            <div className="summitAgendaPanel summitFounderFirst active" data-agenda-panel="fireside" role="tabpanel">
                                <div className="summitAgendaList">
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">08:30 - 09:30</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Registration and Pre-Summit Networking</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">09:45 - 10:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Summit Opening by the Founder</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Pratham Mittal</p>
                                            <p className="founderDesignation">Founder, Masters’ Union and Tetr</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">10:00 - 11:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: The Future of work with AI</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Nuseir Yassin</p>
                                            <p className="founderDesignation">Founder and CEO, Nas Daily</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">11:00 - 11:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: From Services to AI-Native Enterprises: Rethinking India’s IT Playbook</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">CP Gurnani</p>
                                            <p className="founderDesignation">Co-founder and VC, AIONOS
                                                <br />Former CEO and MD, Tech Mahindra
                                            </p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">12:00 - 12:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: Rebuilding Giants into AI Powerhouses</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Joydeep Roy</p>
                                            <p className="founderDesignation">Partner, Human Capital, PwC</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">13:00 - 13:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: India’s AI Moment: Building the Compute Backbone for Millions</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Vishal Dhupar</p>
                                            <p className="founderDesignation">MD, Asia and South, NVIDIA</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">13:00 - 15:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Speed Dating over Lunch</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">15:00 - 15:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: Rebuilding the Enterprise with AI: Lessons from the Frontlines</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Bikram Singh Bedi</p>
                                            <p className="founderDesignation">Former India MD, Google Cloud</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">16:00 - 16:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: Signal vs Noise: What the Data Really Says About AI</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Jeanie Fang</p>
                                            <p className="founderDesignation">Director, Data &amp; AI, Crunchbase</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">17:00 - 17:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: Building India’s AI Stack: Infrastructure, Innovation, and Inclusion</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Shri Abhishek Singh</p>
                                            <p className="founderDesignation">CEO, IndiaAI Mission
                                                <br />Ministry of Electronics and IT, Govt of India
                                            </p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">18:00 - 18:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: AI Revolution in the Content Creation Industry</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Varun Mayya</p>
                                            <p className="founderDesignation">India’s Biggest Tech Influencer</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">19:00 - 19:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Tech and AI Awards</p>
                                        </div>
                                    </div>
        
                                </div>
                            </div>
        
                            <div className="summitAgendaPanel" data-agenda-panel="labs" role="tabpanel" hidden>
                                <div className="summitAgendaList">
        
                                    <div className="mandatoryNote">
                                        <img src="https://images.mastersunion.link/uploads/14042026/v1/speakerIcon.svg" alt="logo" />
        
                                        <p className="noteText">Mandatory Note for Attending: Please carry a laptop on the day the
                                            event. Happy learning!</p>
        
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">11:00 - 12:15</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">EBIT Lab | Theme: RAG Chatbot Builder</p>
                                            <p className="summitSubTitle nkRegular">Output: A working Q&amp;A bot prototype querying
                                                anything with LLMs for retrieval-augmented generation using Weaviate vector
                                                database.</p>
        
                                            <p className="summitAgendaTitle nkSemiBold">AOV Lab | Theme: Data Visualization
                                                Dashboard Blitz</p>
                                            <p className="summitSubTitle nkRegular">Output: A deployable Streamlit dashboard
                                                screenshot or HTML file with key insights highlighted using Seaborn/Plotly.</p>
        
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Vivekanand Vivek</p>
                                            <p className="founderDesignation">Co-Founder, Zenith School of AI</p>
        
                                            <br />
                                            <p className="agendaFounder">Aadyaa Srivastava</p>
                                            <p className="founderDesignation">Data Analytics, Google</p>
                                        </div>
                                    </div>
        
        
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">12:30 - 13:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">EBIT Lab | Theme: Prompt Engineering Mastery
                                            </p>
                                            <p className="summitSubTitle nkRegular">Output: Generate a custom chatbot script
                                                handling real queries (eg: startup pitch analyzer) by crafting 20+ LLM prompts
                                                on Open AI API.</p>
        
                                            <p className="summitAgendaTitle nkSemiBold">AOV Lab | Theme: Build &amp; Unleash AI Agents
                                            </p>
                                            <p className="summitSubTitle nkRegular">Output: Deploy an AI Agent handling real-world
                                                tasks like query routing or automation, built with MCP, N8N APIs, OpenAI API.
                                            </p>
        
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Gaurav Ghai</p>
                                            <p className="founderDesignation">Tech Content Creator (1M+)</p>
        
                                            <br />
                                            <p className="agendaFounder">Harneet Singh (Assisted By: Trisha Khare &amp; Mehak
                                                Rastogi)</p>
                                            <p className="founderDesignation">Chief AI Officer, Rabbitt AI</p>
                                        </div>
                                    </div>
        
        
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">13:00 - 15:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Speed Dating over Lunch</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">15:30 - 16:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">EBIT Lab | Theme: Agentic AI Automation</p>
                                            <p className="summitSubTitle nkRegular">Output: Build a Telegram AI agent that turns
                                                messy ideas into clear outputs using N8N</p>
        
                                            <p className="summitAgendaTitle nkSemiBold">AOV Lab | Theme: Build Your First ML Model
                                            </p>
                                            <p className="summitSubTitle nkRegular">Output: A trained model with accuracy metrics
                                                and predictions saved as a Jupyter notebook shareable on GitHub using
                                                Scikit-learn.</p>
        
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Megha Khetrapal</p>
                                            <p className="founderDesignation">Fraud Fighting Head, TransUnion</p>
        
                                            <br /><br />
                                            <p className="agendaFounder">Vipul Prakash Singhal</p>
                                            <p className="founderDesignation">VP, Data Intelligence, BobbleAI</p>
                                        </div>
                                    </div>
        
        
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">17:00 - 18:15</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">EBIT LAB | Theme: NLP Sentiment Analyzer</p>
                                            <p className="summitSubTitle nkRegular">Output: Train a Hugging Face Transformer model
                                                classifying 100+ tweets for sentiments marked as “positive”,
                                                “negative” or “neutral”.</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Tanya Chopra (Assisted By: Ataish Nehra)</p>
                                            <p className="founderDesignation">AI Excellence Centre Head, Paxcom India</p>
                                        </div>
                                    </div>
        
        
                                </div>
                            </div>
        
                            <div className="summitAgendaPanel" data-agenda-panel="Keynotes" role="tabpanel" hidden>
                                <div className="summitAgendaList">
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">11:00 - 12:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: From Process-led to Product-led: What Must Indian Enterprises Unlearn to Win With AI<br />
                                                <br />
                                                Moderator: Vivek Gambhir,<span className="summitSubTitle nkRegular"> Venture Partner, Lightspeed</span>
                                            </p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Varun Das</p>
                                            <p className="founderDesignation">Chief Product Officer &amp; EVP, Airtel Digital</p>
        
                                            <p className="agendaFounder">Saurabh Srivastava</p>
                                            <p className="founderDesignation">SVP and Head, Product, MakeMyTrip</p>
        
                                            <p className="agendaFounder">Ankit Singhal</p>
                                            <p className="founderDesignation">Director, Product Management, Indeed</p>
        
                                            <p className="agendaFounder">Ojasvi Bhatia</p>
                                            <p className="founderDesignation">Lead, AI Partnerships, India, Meta</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">12:15 - 13:15</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: Inside the Mind of an AI Titan to Build a World-class AI Startup in India<br />
                                                <br />
                                                Moderator: Pankaj Bansal,<span className="summitSubTitle nkRegular">  Founder, Caret Capital &amp; PeopleStrong</span>
                                            </p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Akshay Tandon</p>
                                            <p className="founderDesignation">Co-founder and CTO, Fitsol</p>
        
                                            <p className="agendaFounder">Tushar Bhatnagar</p>
                                            <p className="founderDesignation">Co-founder and CTO, VidBoard.AI</p>
        
                                            <p className="agendaFounder">Prince Khanna</p>
                                            <p className="founderDesignation">Founder and CEO, Eleve Media</p>
        
                                            <p className="agendaFounder">Sumit Verma</p>
                                            <p className="founderDesignation">Co-founder and CTO, Responsible AI Labs</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">13:30 - 14:30</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Theme: The Human Side of AI in Balancing Radical Tech Ambitions Vs Moral Imperatives<br />
                                                <br />
                                                Moderator: Rajat Mathur,<span className="summitSubTitle nkRegular"> Former CHRO, Morgan Stanley</span>
                                            </p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Divya Rajagopal</p>
                                            <p className="founderDesignation">Partner &amp; ED, Hybrid Cloud, IBM</p>
        
                                            <p className="agendaFounder">Ranganathan V Iyer</p>
                                            <p className="founderDesignation">Group CIO, JBM Group</p>
        
                                            <p className="agendaFounder">Vivek Rajagopal</p>
                                            <p className="founderDesignation">Chief Analytics &amp; AI Officer, Narayana Health</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">13:00 - 15:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Speed Dating over Lunch</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">15:30 - 16:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Keynote Theme: How Traditional Businesses (Manufacturing, Retail, and Trading) Can Deploy AI Tools Immediately</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Jaspreet Singh</p>
                                            <p className="founderDesignation">Chief Revenue Officer, Grant Thornton Bharat</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">16:00 - 16:30</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Keynote Theme: AI-Native Finance: How Behavioral Intelligence is Rebuilding the Architecture of Money</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Shiv Mehta</p>
                                            <p className="founderDesignation">Founder &amp; Co-host, The Constant Lab</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">16:30 - 17:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Keynote Theme: How AI is accelerating brand development in Beverages</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Aditya Aggarwal</p>
                                            <p className="founderDesignation">Founder Saṃsāra</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">17:00 - 17:30</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Keynote Theme: Secure AI Factory for Universities</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Tarandeep Bagga</p>
                                            <p className="founderDesignation">Cloud Software Sales Specialist, Cisco</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">17:00 - 17:30</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Keynote Theme: From AI hype to AI execution - what it really takes to build an AI-native company</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Sudeep Srivastava</p>
                                            <p className="founderDesignation">Co-Founder &amp; Director, Appinventiv</p>
                                        </div>
                                    </div>
        
                                </div>
                            </div>
        
                            <div className="summitAgendaPanel" data-agenda-panel="CofounderRoundtable" role="tabpanel" hidden>
                                <div className="summitAgendaList">
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">11:00 - 13:30</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
        
                                            <p className="summitAgendaTitle nkSemiBold"> Pre-curated 1:1 Interactions with
                                                high-intent Builders, Operators, and Domain Experts. </p>
                                            <p className="summitSubTitle nkRegular">Designed to go-beyond surface-level
                                                networking; discover co-founders based on skills, ambition, and vision.
                                                <span className="white-medium"> </span>
                                            </p>
        
        
        
                                        </div>
        
        
                                    </div>
        
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">13:00 - 15:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Speed Dating over Lunch</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">15:30 - 18:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Put your potential Co-founder chemistry
                                                to the test in a fast-paced build sprint.
                                            </p>
                                            <p className="summitSubTitle nkRegular">Teams collab to solve a real-world problem -
                                                aligning ideas, execution, and decision-making under pressure.</p>
        
        
        
                                        </div>
        
                                    </div>
        
        
        
                                </div>
                            </div>
        
                            <div className="summitAgendaPanel" data-agenda-panel="SharkTank" role="tabpanel" hidden>
                                <div className="summitAgendaList">
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">11:00 - 13:30</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
        
                                            <p className="summitAgendaTitle nkSemiBold"> 11 Tech Startups take the centrestage
                                                and Pitch in front of India’s Top VCs and Angel Investors </p>
                                            <p className="summitSubTitle nkRegular">Theme: SaaS, PaaS, AI and Machine Learning,
                                                Marketplaces/Platform Models
                                                <span className="white-medium"> </span>
                                            </p>
        
        
        
                                        </div>
        
        
        
                                    </div>
        
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">13:00 - 15:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Speed Dating over Lunch</p>
        
                                        </div>
        
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">15:30 - 18:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">11 Tech Startups take the centrestage
                                                and Pitch in front of India’s Top VCs and Angel Investors
                                            </p>
                                            <p className="summitSubTitle nkRegular">Theme: Robotics, Automation, Blockchain,
                                                FinTech, HealthTech, CyberSecurity</p>
        
        
        
                                        </div>
        
        
                                    </div>
        
        
        
                                </div>
        
                                <div className="panelBtn">
        
                                    <a href="/ai-summit-form?tab=free2" target="_blank" className="roboBtn greyBtn ">
                                        <p className="btnText">Register Now</p>
                                        <span className="arrowWrap">
                                            <svg className="arrow arrow1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="https://www.w3.org/2000/svg">
                                                <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="#090909"></path>
                                                <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="#090909"></path>
                                            </svg>
        
                                            <svg className="arrow arrow2" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="https://www.w3.org/2000/svg">
                                                <path d="M16.0831 5.06611L3.4375 17.6676L4.32808 18.5625L16.9737 5.96104L16.0831 5.06611Z" fill="#090909"></path>
                                                <path d="M17.2247 15.8021C14.6247 12.4931 14.4228 7.76954 16.846 4.32159C16.7955 4.27107 17.6412 5.16779 17.6285 5.15516C14.2335 7.52957 9.50055 7.31486 6.24431 4.71311L7.39283 3.4375C9.75297 6.17818 14.1073 6.25395 16.9596 4.19529C16.947 4.19529 17.8052 5.06675 17.7421 5.02886C15.3189 7.6685 15.5965 12.4047 18.5625 14.4886L17.212 15.8147L17.2247 15.8021Z" fill="#090909"></path>
                                            </svg>
        
                                        </span>
                                    </a>
                                </div>
                            </div>
        
                            <div className="summitAgendaPanel" data-agenda-panel="FilmmakingHackathon" role="tabpanel" hidden>
                                <div className="mandatoryNote">
                                    <a href="/gen-ai" className="sp-link">Click here <img src="https://images.mastersunion.link/uploads/18022025/v1/black_arrow_image.svg" alt="Icon" /></a>
        
                                    <p className="noteText"> to know more about the AgenticAI Hackathon</p>
        
                                </div>
                                <div className="summitAgendaList">
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">11:00 - 12:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">InVideo Product Demo</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Vishal Balsara</p>
                                            <p className="founderDesignation">Creative Director, InVideo (Emmy Nominee)</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">12:00 - 17:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Hackathon Begins | Themes Drop at 12 Noon</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">13:00 - 15:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Speed Dating over Lunch</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">15:00 - 16:00</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Workshop Theme: AI Film making | Live hands-on</p>
                                            <p className="summitSubTitle nkRegular">Output: Build live micro AI Film</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Chetan Arora</p>
                                            <p className="founderDesignation">Founder, Xperimentals AI (Seoul AI Film Festival Winner)</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">16:30 - 17:30</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Panel Theme: Co-Directed Realities: When Humans and AI Share One Lens</p>
                                        </div>
        
                                        <div className="summitAgendaAction">
                                            <p className="agendaFounder">Vikram Malhotra</p>
                                            <p className="founderDesignation">Founder and CEO, Abundantia Entertainment (Makers of Baby, Airlift, Shakuntala Devi)</p>
        
                                            <p className="agendaFounder">Meena Chhabbria</p>
                                            <p className="founderDesignation">Fractional CMO, Allu Cinemas</p>
        
                                            <p className="agendaFounder">Vishal Balsara</p>
                                            <p className="founderDesignation">Creative Director, InVideo (Emmy Nominee)</p>
                                        </div>
                                    </div>
        
                                    <div className="summitAgendaRow">
                                        <div className="summitAgendaTimeBelow">
                                            <p className="timeText">19:00 - 19:45</p>
                                        </div>
        
                                        <div className="summitAgendaContentBelow">
                                            <p className="summitAgendaTitle nkSemiBold">Cash Prize | Top 3 Best Filmmakers</p>
                                        </div>
                                    </div>
        
                                </div>
                            </div>
        
        
        
        
        
        
        
                        </div>
        
                    </div>
                </div>
            </div>
        
            
        </section>
    );
}
