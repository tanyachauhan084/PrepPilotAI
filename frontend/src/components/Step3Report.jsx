import React from 'react'

const Step3Report = ({report}) => {

   if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading Report...</p>
      </div>
    );
  }



  const {

    finalScore=0,  
    confidence=0,
    communication=0,
    correctness=0,
    questionWiseScore=[]
  } = report;


const questionScoreData = questionWiseScore.map((score, index)=>({

  name: `Q${index+1}`,

  score:score.score ||0
})  )


  const skills = [
    { label: "Confidence", value: confidence },
    { label: "Communication", value: communication },
    { label: "Correctness", value: correctness },
  ];

  let performanceText = "";
  let shortTagline = "";

  if (finalScore >= 8) {
    performanceText = "Ready for job opportunities.";
    shortTagline = "Excellent clarity and structured responses.";
  } else if (finalScore >= 5) {
    performanceText = "Needs minor improvement before interviews.";
    shortTagline = "Good foundation, refine articulation.";
  } else {
    performanceText = "Significant improvement required.";
    shortTagline = "Work on clarity and confidence.";
  }

  
    const score = finalScore;
    const percentage = (score / 10) * 100;
  
  
    const downloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
  
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    
    let currentY = 25;
    
 // ================= TITLE =================
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(34, 197, 94);
  doc.text("AI Interview Performance Report", pageWidth / 2, currentY, {
    align: "center",
  });

  currentY += 5;

  // underline
  doc.setDrawColor(34, 197, 94);
  doc.line(margin, currentY + 2, pageWidth - margin, currentY + 2);

  currentY += 15;

}
  return (
    <div>

    </div>
  )
}

export default Step3Report