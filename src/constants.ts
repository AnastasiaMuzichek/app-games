import Icon, {
    NodeIndexOutlined,
    SearchOutlined,
    AreaChartOutlined,
    AimOutlined,
    DribbbleOutlined,
    DashboardOutlined,
    IdcardOutlined,
    FireOutlined,
    FolderViewOutlined,
    MehOutlined,
} from '@ant-design/icons-vue';

type Genres = {
    name: string; // на рус
    title: string; // на англ
    icon: typeof Icon;
};

export const genres: Genres[] = [
    { name: 'Приключениe', title: 'Adventure', icon: NodeIndexOutlined },
    { name: 'Головоломка', title: 'Puzzle', icon: SearchOutlined },
    { name: 'Стратегия', title: 'Strategy', icon: AreaChartOutlined },
    { name: 'Шутер', title: 'Shooter', icon: AimOutlined },
    { name: 'Спорт', title: 'Sport', icon: DribbbleOutlined },
    { name: 'Гонка', title: 'Race', icon: DashboardOutlined },
    { name: 'Симулятор', title: 'Simulation', icon: IdcardOutlined },
    { name: 'Экшн', title: 'Action', icon: FireOutlined },
    { name: 'Хоррор', title: 'Horror', icon: FolderViewOutlined },
    { name: 'РПГ', title: 'RPG', icon: MehOutlined },
];
