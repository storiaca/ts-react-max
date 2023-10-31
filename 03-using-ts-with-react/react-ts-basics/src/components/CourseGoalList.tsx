import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";

interface CourseGoalListProps {
  goals?: CGoal[];
}
function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals?.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
