import { COMMENTS } from '../../app/shared/COMMENTS';
import CampsiteCard from '../campsites/CampsiteCard';

export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
};

