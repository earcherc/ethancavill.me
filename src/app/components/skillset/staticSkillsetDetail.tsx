import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillDetailsType } from './skillset';

export default function StaticSkillsetDetail({ icon, title, description }: SkillDetailsType) {
  return (
    <div className="bg-white p-6 rounded border-t-4 shadow m-2">
      <div className="flex font-bold align-middle mb-2 text-gray-900">
        <FontAwesomeIcon icon={icon} className="h-6 w-6 mr-4" />
        <span className="text-xl">{title}</span>
      </div>
      <p className="prose prose-slate">{description}</p>
    </div>
  );
}
