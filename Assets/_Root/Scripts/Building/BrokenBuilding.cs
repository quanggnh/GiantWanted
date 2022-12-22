using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class BrokenBuilding : MonoBehaviour
{
    [SerializeField] List<Brick> brickList1;
    [SerializeField] List<Brick> brickList2;
    [SerializeField] List<Brick> brickList3;
    [SerializeField] List<Brick> brickList4;
    [SerializeField] List<Brick> brickList5;

    public bool IsBreakAll = false;

    public void CheckBrickListHit(string nameBrick, float explodedForce)
    {
        BreakingBrick(brickList1, nameBrick, explodedForce);
        BreakingBrick(brickList2, nameBrick, explodedForce);
        BreakingBrick(brickList3, nameBrick, explodedForce);
        BreakingBrick(brickList4, nameBrick, explodedForce);
        BreakingBrick(brickList5, nameBrick, explodedForce);
        return;
    }

    private void OnEnable()
    {
        BreakingBrick(brickList1, "A", 50);
        BreakingBrick(brickList2, "A", 78);
        BreakingBrick(brickList3, "A", 55);
        BreakingBrick(brickList4, "A", 70);
        BreakingBrick(brickList5, "A", 60);


    }

    private void BreakingBrick(List<Brick> brickList, string nameBrick, float force)
    {
        foreach (var item in brickList)
        {
            //if (item.transform.name == nameBrick || IsBreakAll)
            {
                foreach (var brick in brickList)
                {
                    //Debug.Log(brick.BrickRigid + " " + brick.transform.name + " " + brick.transform.root.name);
                    brick.BrickRigid = brick.GetComponent<Rigidbody>();
                    brick.BrickRigid.isKinematic = false;
                    brick.BrickRigid.AddExplosionForce(Random.Range(force, force + 10f), item.transform.position, Random.Range(1, 3f), Random.Range(1, 2f), ForceMode.VelocityChange);
                    brick.BrickRigid.AddTorque(Vector3.right * 30f, ForceMode.VelocityChange);

                    var random = Random.Range(1, 3);
                    ScaleBrick(brick, random);
                }
                return;
            }
        }
    }

    private void ScaleBrick(Brick brick, float randomDelay)
    {
        brick.gameObject.transform.DOScale(new Vector3(0.08f, 0.08f, 0.08f), 1f).SetDelay(randomDelay).OnComplete(() =>
        {
            brick.gameObject.SetActive(false);
        });
    }
}
