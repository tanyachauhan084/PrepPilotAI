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
    confdence=0,
    communication=0,
    correctness=0,
    questionWiseScore=[]
  } = report;


const questionScroeData = questionWiseScore.map((score, index)=>({

  name: `Q${index+1}`,

  score:score.score ||0
})  )


  const skills = [
    { label: "Confidence", value: confidence },
    { label: "Communication", value: communication },
    { label: "Correctness", value: correctness },
  ];

  

  return (
    <div>

    </div>
  )
}

export default Step3Report