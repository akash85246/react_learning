import React from "react";
import Card from "../tile";
import emojipedia from "../emojipedia";

function create(emojic) {
  return (
    <Card
      key={emojic.ID}
      emoji={emojic.emoji}
      name={emojic.name}
      descript={emojic.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* <Card 
        emoji="🙏" 
        name="Person With Folded Hands" 
        descript="Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you." />

        <Card 
          emoji="💪" 
        name="Tense Biceps" 
        descript="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
        <Card 
              emoji: "🤣", 
        name="Rolling On The Floor, Laughing" 
        descript="This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
        /> */}
        {emojipedia.map(create)}
      </dl>
    </div>
  );
}

export default App;
