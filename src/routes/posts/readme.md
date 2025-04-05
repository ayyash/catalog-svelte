<!-- routify:meta _draft=true -->
unrouted partial components start with _
it can be named with lowercase, and imporetd as title case

_card => import Card

but that's not good enough, always prefix with folder, for easy readability 

the file name is _card
the import statment is 
import PostCard from './_card.svelte' 

PostCard
