//var authorContainer = document.querySelector('.author-container');

var authorDateContainer = document.createElement('div');
authorDateContainer.setAttribute('class', 'author-date-container');

var authorProfileContainer = document.createElement('div');
authorProfileContainer.setAttribute('class', 'author-profile-container');

var creatorContainer = document.querySelector('.creator-container');
creatorContainer.addEventListener('click', function(e) {
    window.location.href = '/about';
})

var creatorProfilePicture = document.querySelector('.creator-profile-picture');
var creatorName = document.querySelector('.creator-name')
var authorBio = document.querySelector('.about-the-author-bio');

fetchApi(PORTFOLIO, 'GET', null).then(data => {

    var profilePicture = data.profile_picture;
    var profileName = data.name;
    var shortBio = data.short_bio;

    var picture = document.createElement('img');
    picture.src = profilePicture;
    picture.setAttribute('class', 'author-picture')

    var profileContainer = document.createElement('div');
    profileContainer.setAttribute('class', 'profile-container');

    var byLabel = document.createElement('span')
    byLabel.setAttribute('class', 'by-txt')
    byLabel.innerHTML = 'Article By';

    var name = document.createElement('span')
    name.setAttribute('class', 'author-txt')
    name.innerHTML = profileName;
    name.addEventListener('click', function(e) {
        window.location.href = '/about';
    })

    authorDateContainer.appendChild(picture);
    authorDateContainer.appendChild(byLabel);
    authorDateContainer.appendChild(name);

    //authorContainer.appendChild(authorProfileContainer);
    //authorContainer.appendChild(authorDateContainer);

    creatorProfilePicture.src = profilePicture;
    creatorName.innerHTML = profileName;
    authorBio.innerHTML = shortBio;

    // Social Share
    var socialShareContainer = document.createElement('div');
    socialShareContainer.setAttribute('class', 'social-share-container');

    var shareIconLabelContainer = document.createElement('div');
    shareIconLabelContainer.setAttribute('class', 'share-icon-label-container');

    var shareIcon = document.createElement('i');
    shareIcon.setAttribute('class', 'material-icons md-16');
    shareIcon.innerHTML = 'share';
    shareIconLabelContainer.appendChild(shareIcon);
    socialShareContainer.appendChild(shareIconLabelContainer);

    SOCIAL_SHARE_ICONS.map(data => {
        var shareIconContainer = document.createElement('div');
        shareIconContainer.setAttribute('class', 'share-icon-container');

        var socialShareIcon = document.createElement('img');
        socialShareIcon.setAttribute('class', 'social-share-icon');
        socialShareIcon.src = data.icon;
        
        socialShareIcon.addEventListener('click', function (e) {
            let share_url = data.url + window.location.href;
            window.open(share_url,'_blank');
        })

        shareIconContainer.appendChild(socialShareIcon);
        socialShareContainer.appendChild(shareIconContainer);
    })
    //authorContainer.appendChild(profileContainer);
    //authorContainer.appendChild(socialShareContainer);
})