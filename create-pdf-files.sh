#!/bin/bash

# Create brochures directory if it doesn't exist
mkdir -p public/brochures

# Define the PDF template function
create_pdf() {
  local filename=$1
  local title=$2
  local description=$3

  cat > "public/brochures/$filename" << EOF
%PDF-1.4
1 0 obj
<< /Title ($title)
   /Creator (MAHASAMVIT Placeholder PDF)
   /Producer (Same IDE)
   /CreationDate (D:20250406120000)
>>
endobj
2 0 obj
<< /Type /Catalog
   /Pages 3 0 R
>>
endobj
3 0 obj
<< /Type /Pages
   /Kids [4 0 R]
   /Count 1
>>
endobj
4 0 obj
<< /Type /Page
   /Parent 3 0 R
   /MediaBox [0 0 612 792]
   /Contents 5 0 R
   /Resources << /Font << /F1 6 0 R >> >>
>>
endobj
5 0 obj
<< /Length 178 >>
stream
BT
/F1 24 Tf
100 700 Td
($title) Tj
/F1 12 Tf
0 -50 Td
($description) Tj
ET
endstream
endobj
6 0 obj
<< /Type /Font
   /Subtype /Type1
   /BaseFont /Helvetica
>>
endobj
xref
0 7
0000000000 65535 f
0000000009 00000 n
0000000146 00000 n
0000000195 00000 n
0000000254 00000 n
0000000380 00000 n
0000000610 00000 n
trailer
<< /Size 7
   /Root 2 0 R
   /Info 1 0 R
>>
startxref
687
%%EOF
EOF
}

# Global Finance Education brochures
create_pdf "global-finance-overview.pdf" "Global Finance Education Overview" "Comprehensive overview of global finance education programs and opportunities."
create_pdf "finance-degree-programs.pdf" "Finance Degree Programs" "Detailed information about various finance degree programs offered."
create_pdf "international-finance-courses.pdf" "International Finance Courses" "Catalog of international finance courses with syllabus details."

# Financial Services brochures
create_pdf "financial-services-overview.pdf" "MAHASAMVIT Financial Services Overview" "Complete overview of financial services offered by MAHASAMVIT."
create_pdf "portfolio-management-guide.pdf" "Portfolio Management Guide" "Guide to effective portfolio management strategies and techniques."
create_pdf "wealth-creation-strategies.pdf" "Wealth Creation Strategies" "Proven wealth creation strategies based on Warren Buffet principles."

# Money Research brochures
create_pdf "money-research-methodologies.pdf" "Money Research Methodologies" "Detailed explanation of money research methodologies and approaches."
create_pdf "investment-analysis-tools.pdf" "Investment Analysis Tools" "Overview of tools and techniques for effective investment analysis."
create_pdf "market-trends-report.pdf" "Market Trends Report 2025" "Analysis of current market trends and future projections for 2025."

# Financial Research brochures
create_pdf "financial-research-services.pdf" "Financial Research Services Guide" "Comprehensive guide to MAHASAMVIT's financial research services."
create_pdf "equity-research-handbook.pdf" "Equity Research Handbook" "Handbook for equity research methodologies and best practices."
create_pdf "economic-analysis-framework.pdf" "Economic Analysis Framework" "Framework for conducting thorough economic analysis."

# Business Consultancy brochures
create_pdf "business-consulting-services.pdf" "Business Consulting Services" "Overview of business consulting services offered by MAHASAMVIT."
create_pdf "startup-growth-guide.pdf" "Startup Growth Guide" "Guide for startups looking to achieve sustainable growth."
create_pdf "business-transformation-strategies.pdf" "Business Transformation Strategies" "Strategies for successful business transformation and adaptation."

# Job Consultancy brochures
create_pdf "career-development-guide.pdf" "Career Development Guide" "Guide for career planning and professional development."
create_pdf "job-market-analysis.pdf" "Job Market Analysis 2025" "Analysis of job market trends and opportunities for 2025."
create_pdf "resume-interview-handbook.pdf" "Resume & Interview Handbook" "Handbook for creating effective resumes and mastering interviews."

# Agro Projects brochures
create_pdf "agricultural-investment-opportunities.pdf" "Agricultural Investment Opportunities" "Overview of investment opportunities in agricultural projects."
create_pdf "sustainable-farming-guide.pdf" "Sustainable Farming Guide" "Guide to sustainable farming practices and methodologies."
create_pdf "agro-business-models.pdf" "Agro-Business Models" "Various business models for successful agro-business ventures."

# Media & Entertainment brochures
create_pdf "media-entertainment-investments.pdf" "Media & Entertainment Investments" "Investment opportunities in the media and entertainment sectors."
create_pdf "digital-media-trends.pdf" "Digital Media Trends 2025" "Analysis of emerging trends in digital media for 2025."
create_pdf "entertainment-industry-analysis.pdf" "Entertainment Industry Analysis" "Comprehensive analysis of the entertainment industry landscape."

echo "All PDF files created successfully in public/brochures/"
