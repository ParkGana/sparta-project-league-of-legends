/* champion info 데이터 변환 */
export const formatChampionInfo = (info: string): string => {
    switch (info) {
        case 'attack':
            return '공격력';
        case 'defense':
            return '방어력';
        case 'magic':
            return '마법력';
        case 'difficulty':
            return '난이도';
        default:
            return '';
    }
};
