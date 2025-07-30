import csv

competitions = []
teams = []
national_teams = []
fixtures = []
venues = []

with open('links.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        title, href = row
        if 'vs' in title.lower():
            fixtures.append((title, href))
        elif 'tickets' in title.lower() and ('cup' in title.lower() or 'league' in title.lower() or 'qualifiers' in title.lower() or 'friendlies' in title.lower() or 'opener' in title.lower() or 'final' in title.lower() or 'ceremony' in title.lower() or 'package' in title.lower() or 'experience' in title.lower() or 'hospitality' in title.lower() or 'premium' in title.lower() or 'corporate' in title.lower() or 'day' in title.lower() or 'fixture' in title.lower() or 'pokal' in title.lower() or 'italia' in title.lower() or 'france' in title.lower() or 'del rey' in title.lower()):
            competitions.append((title, href))
        elif 'stadium' in title.lower() or 'arena' in title.lower() or 'nou' in title.lower() or 'bernabeu' in title.lower() or 'trafford' in title.lower() or 'anfield' in title.lower() or 'siro' in title.lower():
            venues.append((title, href))
        elif 'tickets' in title.lower():
            if 'argentina' in title.lower() or 'france' in title.lower() or 'brazil' in title.lower() or 'england' in title.lower() or 'spain' in title.lower() or 'germany' in title.lower() or 'portugal' in title.lower() or 'netherlands' in title.lower() or 'italy' in title.lower() or 'croatia' in title.lower() or 'morocco' in title.lower() or 'japan' in title.lower() or 'mexico' in title.lower() or 'usa' in title.lower() or 'canada' in title.lower() or 'belgium' in title.lower():
                national_teams.append((title, href))
            else:
                teams.append((title, href))

with open('categorized_links.txt', 'w') as f:
    f.write('Competitions:\n')
    for title, href in competitions:
        f.write(f'- {title} ({href})\n')

    f.write('\nTeams:\n')
    for title, href in teams:
        f.write(f'- {title} ({href})\n')

    f.write('\nNational Teams:\n')
    for title, href in national_teams:
        f.write(f'- {title} ({href})\n')

    f.write('\nFixtures:\n')
    for title, href in fixtures:
        f.write(f'- {title} ({href})\n')

    f.write('\nVenues:\n')
    for title, href in venues:
        f.write(f'- {title} ({href})\n')
