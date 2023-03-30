import Skill from '../../Data/Skills';
import * as l from './SkillskElements';
const Skills = () => {
    return ( 
        <l.Des id="Skills">
            <l.Sec>
                <l.H1>Skills</l.H1>
            </l.Sec>
            <l.Sec>
                <l.Row>
                    {
                        Skill.map(skill => {
                            console.log(skill);
                            return(
                                 <l.Card data-aos="flip-right">
                                    <l.Icon>{skill.Icon}</l.Icon>
                                    <l.Title>{skill.Title}</l.Title>
                                    <l.Desc>{skill.desc}</l.Desc>
                                 </l.Card>    
                            )
                        })
                    }
                </l.Row>
            </l.Sec>
            
        </l.Des>
     );
}
 
export default Skills;