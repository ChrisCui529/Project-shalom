import os


def test_index_exists():
    assert os.path.exists('index.html')


def test_lessons_exists():
    assert os.path.exists('lessons.html')


def test_practice_exists():
    assert os.path.exists('practice.html')


def test_pages_contain_chinese():
    for page in ['index.html', 'lessons.html', 'practice.html']:
        with open(page, encoding='utf-8') as f:
            data = f.read()
        assert '双语' in data or '课程' in data or '练习测试' in data
